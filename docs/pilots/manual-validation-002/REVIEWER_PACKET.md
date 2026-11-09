# EXP-002 — Synthetic Reviewer Calibration Packet

**Purpose:** independent reviewer practice with **fabricated examples**, not participant responses. The examples below and the scoring rubric are public and **cannot** serve as actual held-out trial items.

**Scoring source:** [EXP-002_SCORING.md](../EXP-002_SCORING.md). Score task correctness (C), edge-case robustness (R) and written explanation (E) separately on that document's 0–4 anchors. Scores require observing relevant code and explanation; an absent artifact should be `NOT_SCORED`, not zero. Do **not** consult another reviewer before submitting your private first-pass sheet.

## Synthetic task presented to the coder

Using Python standard-library `csv.DictReader`, write a function that accepts CSV **text** with required columns `artifact,result,bytes`. Count rows for which `result` is exactly `verified` and `bytes` contains **ASCII digits only** representing a non-negative base-10 integer. Sum those quantities. Ignore rows with a different result or an invalid quantity. An empty CSV with a valid header returns `(0, 0)`. A missing required header must produce a deliberate and controlled error, not a fabricated result or an unchecked accidental exception.

Input example:

```csv
artifact,result,bytes
a1,verified,11
a2,skipped,7
a3,verified,9
a4,verified,?
a5,verified,0
```

Expected for this **public example only**: `(3, 20)`. This is an accessible calibration vignette, not a secret answer key.

### Packet MV-A (fabricated code response)

```python
import csv
import io
import re

def summarize(text):
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
```

**Submitted explanation:** "I check that columns exist before reading. I include only verified rows with ASCII integer quantities, and invalid values are skipped. A missing header gets an explicit error."

### Packet MV-B (fabricated code response)

```python
import csv
import io

def summarize(text):
    count = 0
    total = 0
    for row in csv.DictReader(io.StringIO(text)):
        if row["result"] == "verified":
            count += 1
            total += int(row["bytes"])
    return (count, total)
```

**Submitted explanation:** "I loop through the CSV and sum all verified entries."

### Packet MV-C (fabricated code response)

```python
def summarize(text):
    return (3, 20)
```

**Submitted explanation:** "The five sample rows have three verified valid values."

### Packet MV-D — No submitted artifact

**Status:** `FOLLOWUP_MISSING`. There is no code, no explanation and no permissible rater inference. Mark `NOT_SCORED` and leave C/R/E blank. Do not make this a zero to inflate an arm effect.

## Reviewer questions

- Which specified examples are sufficient to assess the submission, and what **additional** locked cases are required for a strong robustness judgment?
- Does matching the public example establish general correctness? What if a required header is missing or `bytes` is `-1`, `?`, or `٠`?
- Are you confident that the scoring rubric distinguishes a deliberate controlled error from an uncaught exception?
- Could you apply the anchors without learning the hypothetical treatment assignment or model identity?
- Which rubric phrases were ambiguous? Record those before coordinator adjudication.

These examples are synthetic calibration artifacts. **Do not label a study arm** on a reviewer worksheet. There is no hidden external participant, treatment assignment or actual delayed skill measurement.
