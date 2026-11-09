"""Offline EXP-002 public synthetic calibration, NOT a participant scoring system.

These three functions are transcription of the publicly documented MV-A/B/C
synthetic vignettes. They MUST NOT be used to execute untrusted learner code.
"""
import csv
import io
import re
import unittest


def mv_a(text):
    reader = csv.DictReader(io.StringIO(text))
    required = {"artifact", "result", "bytes"}
    if reader.fieldnames is None or not required.issubset(set(reader.fieldnames)):
        raise ValueError("missing required column")
    count = total = 0
    for row in reader:
        if row.get("result") != "verified":
            continue
        value = row.get("bytes")
        if isinstance(value, str) and re.fullmatch(r"[0-9]+", value):
            count += 1
            total += int(value)
    return (count, total)


def mv_b(text):
    count = 0
    total = 0
    for row in csv.DictReader(io.StringIO(text)):
        if row["result"] == "verified":
            count += 1
            total += int(row["bytes"])
    return (count, total)


def mv_c(text):
    return (3, 20)


EXAMPLE = """artifact,result,bytes
a1,verified,11
a2,skipped,7
a3,verified,9
a4,verified,?
a5,verified,0
"""
VALID_ALTERNATE = """artifact,result,bytes
z1,verified,4
z2,skipped,99
z3,verified,3
"""
INVALID_VALUE = """artifact,result,bytes
a1,verified,11
a2,verified,n/a
"""
NON_ASCII_DIGIT = """artifact,result,bytes
a1,verified,11
a2,verified,٠
"""
SPACED_DIGIT = """artifact,result,bytes
a1,verified, 11 
"""
MISSING_HEADER = """artifact,result
z1,verified
"""
EMPTY_HEADER = "artifact,result,bytes\n"
ZERO_VALUE = "artifact,result,bytes\nz1,verified,0\n"

CASES = {
    # Expected *observed* behavior of public vignettes, not a rating verdict.
    # Error names are errors from unhandled code paths, except A's deliberate
    # ValueError on missing required fields.
    "published_example": (EXAMPLE, ((3, 20), "ValueError", (3, 20))),
    "valid_alternate": (VALID_ALTERNATE, ((2, 7), (2, 7), (3, 20))),
    "invalid_quantity": (INVALID_VALUE, ((1, 11), "ValueError", (3, 20))),
    "non_ascii_digit": (NON_ASCII_DIGIT, ((1, 11), (2, 11), (3, 20))),
    "whitespace_quantity": (SPACED_DIGIT, ((0, 0), (1, 11), (3, 20))),
    "missing_required_header": (MISSING_HEADER, ("ValueError", "KeyError", (3, 20))),
    "header_only": (EMPTY_HEADER, ((0, 0), (0, 0), (3, 20))),
    "zero_quantity": (ZERO_VALUE, ((1, 0), (1, 0), (3, 20))),
}


def observe(func, text):
    try:
        return func(text)
    except (ValueError, KeyError) as exc:
        return type(exc).__name__


class CalibrationChecks(unittest.TestCase):
    def test_public_vignettes_have_expected_behavior(self):
        for name, (text, expected) in CASES.items():
            for fn, exp in zip((mv_a, mv_b, mv_c), expected):
                with self.subTest(case=name, vignette=fn.__name__):
                    self.assertEqual(observe(fn, text), exp)

    def test_missing_artifact_remains_unscored(self):
        # A missing response is not executed or given an invented zero score.
        missing = {"packet_id": "MV-D", "status": "FOLLOWUP_MISSING",
                   "C": "", "R": "", "E": ""}
        self.assertEqual(missing["status"], "FOLLOWUP_MISSING")
        self.assertTrue(all(missing[key] == "" for key in ("C", "R", "E")))

    def test_memorized_example_does_not_generalize(self):
        # MV-A and MV-C agree on the visible sample but diverge when values change.
        self.assertEqual(mv_a(EXAMPLE), mv_c(EXAMPLE))
        self.assertNotEqual(mv_a(VALID_ALTERNATE), mv_c(VALID_ALTERNATE))


if __name__ == "__main__":
    unittest.main()
