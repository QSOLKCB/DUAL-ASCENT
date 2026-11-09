# DUAL-ASCENT Test Plan — Revision Three

## Core distinction

Passing deterministic source tests establishes only that proposed code operated on supplied **synthetic** data in one recorded environment. It does not establish consent validity, rater reliability, calibrated trust, independent learning, agency, creativity, prospective-intention validity, privacy in live deployment, or benefit.

| Status | Meaning |
|---|---|
| EXECUTED | A local command was actually run and recorded in `VALIDATION_REPORT.md`. |
| STATICALLY REVIEWED | Source, archive, workflow, or documentation content was inspected. |
| PROPOSED | Requirement intentionally outside the reference subset. |
| NOT TESTED | Requires another runtime/environment, independent review, or approved human-subject research. |

## Revision-three deterministic coverage

| ID | Test family | Status | Expected outcome |
|---|---|---|---|
| UT-001–UT-003 | Canonical key order, valid goal, missing acceptance test. | EXECUTED | Deterministic hash; valid exit 0; invalid exit 2. |
| UT-004–UT-008 | Unknown fields, timestamp, top-level array, duplicate keys, nested duplicates/nonfinite JSON. | EXECUTED | Fail closed with controlled error. |
| UT-009–UT-013 | Prediction action/probability constraints; receipt round trip, tampering, headers, indices, source names. | EXECUTED | Valid inputs verify; mutation/contract error rejects. |
| UT-014 | Portable basename policy. | EXECUTED | Reject path separators, drive syntax, controls/NUL, blank/whitespace, `.` and `..`. |
| UT-015 | R3-01 unhashable `mode`. | EXECUTED | List/object values return exit 2, never traceback. |
| UT-016 | R3-02 numeric safety. | EXECUTED | Huge ±integers, booleans, `NaN`, infinities, `1e999`, wrong lengths and out-of-range values reject; boundaries validate. |
| UT-017 | R3-03 Unicode scalar compatibility. | EXECUTED | Unpaired high/low surrogates reject at validation; multilingual astral text receipt/verify round trips. |
| UT-018 | HTML/output safety. | EXECUTED | Dynamic payload escaped; no remote/script markup; existing output symlink rejected. |
| UT-019 | Parser bounds. | EXECUTED | Invalid UTF-8, >1 MB input, deep nonobject input return controlled error. |
| UT-020 | Golden vectors/documentation example. | EXECUTED | Fixture receipt, leaf/root, and raw-file checksum agree mechanically. |
| UT-021 | Archive hygiene and manifest. | EXECUTED at final packaging | Safe sorted paths, no caches/bytecode/symlinks/duplicates/secrets/personal records; CRC and manifest pass. |
| UT-022 | JSONL append/locking, migration, export. | PROPOSED | Not implemented. |
| UT-023 | Consent, withdrawal, blinding, statistics, live study. | PROPOSED | Not implemented. |

The final local discovery count is deliberately recorded only after the final clean test run in `VALIDATION_REPORT.md`; it is not copied forward as a stale release claim.

## Commands and exact error contract

```bash
cd DUAL_ASCENT_PROPOSED_IMPLEMENTATION_rev3
python3 -I -B -m unittest discover -s tests -v
python3 -I -B dual_ascent.py validate fixtures/valid_goal.json
python3 -I -B dual_ascent.py validate fixtures/valid_prediction.json
python3 -I -B dual_ascent.py receipt fixtures/records.json --output /tmp/receipt.json
python3 -I -B dual_ascent.py verify fixtures/records.json /tmp/receipt.json
python3 -I -B dual_ascent.py dashboard fixtures/records.json /tmp/receipt.json --output /tmp/dashboard.html
python3 -I -B DUAL_ASCENT_THIRD_PASS_GATE.py EXTRACTED_ROOT
```

Every malformed/contract negative CLI case must return **exactly exit 2** and must not print `Traceback`. Exit 1 is a failure, not an acceptable invalid-input result. The immutable gate is a separate standard-library check and must pass with zero unresolved checks.

## Proposed CI and portability

The included workflow is **PROPOSED** configuration, not observed GitHub Actions evidence. It targets CPython 3.12 on Ubuntu 24.04, runs the standard-library suite, valid round trip, exact-exit/no-traceback negative cases, dashboard isolation, and cache checks. Local third-pass execution used Python 3.14.4. Python 3.11–3.13 remain **NOT TESTED** in this environment despite declared `>=3.11` compatibility.

## Empirical validation: not executed

Before any human study, conduct cognitive interviews; pilot rubric/task comprehension; measure masked-rater agreement; validate randomization, tool/task parity, and leakage controls; and report burden, withdrawal, delayed-test missingness, technical failure, privacy misunderstanding, and adverse events. Confirmatory claims require preregistration, ethics/IRB approval or determination where applicable, valid consent, an analysis plan, denominators, missingness, effect estimates/CIs, and predeclared sensitivity analyses.

Goal-first, declared-exploration, tool-first, and no-new-tool conditions must remain normatively neutral. Declared exploration is a legitimate purpose and must not be coded as failure for lacking a build artifact.

## Release-stop criteria

Do not call the utility research-ready if any strict contract failure reappears; dashboard generation bypasses verification; archives contain bytecode, credentials, or personal data; a negative CLI test crashes rather than returns 2; fixtures/docs disagree with computed vectors; or any live data collection lacks approved governance. Do not advance beyond REVISE unless a decision owner shows why a manual protocol is insufficient.
