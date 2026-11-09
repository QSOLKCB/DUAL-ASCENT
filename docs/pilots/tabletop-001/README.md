# EXP-002 — Synthetic Tabletop Rehearsal 001

**Date:** 2026-11-09 (Australia/Adelaide)  
**Status:** EXECUTED **limited structural simulation** / **REVISE** for human-study readiness  
**Source protocol:** [EXP-002_PREFLIGHT.md](../EXP-002_PREFLIGHT.md), [EXP-002_PROTOCOL.md](../EXP-002_PROTOCOL.md), [EXP-002_SCORING.md](../EXP-002_SCORING.md)  
**Scope:** fabricated records only; no recruitment, consent request, study intervention, real AI-agent interaction, independent human rater, or empirically established benefit.

This folder is the next step after PR #2. It documents an **actually performed synthetic structural preflight**, not a full manual pilot or preregistration. The five CSV worksheets are intentionally public because **every identifier and value is fictional**. Do **not** put real allocation keys, scoring packets, private task items, or human data into this repo.

## Files and access simulation

| File | Intended access in a real study | What this fictional example does |
|---|---|---|
| `allocation_SYNTHETIC.csv` | Coordinator only | Maps five `SYN-` cases to fictional arms and packet IDs |
| `blinded_packets_SYNTHETIC.csv` | Raters | Opaque packet IDs and visit/status; **no arm or participant ID** |
| `rater_X_SYNTHETIC.csv` | Rater X then coordinator | One **invented** ordinal rating |
| `rater_Y_SYNTHETIC.csv` | Rater Y then coordinator | Another **invented** rating, **not independently human-scored** |
| `deviations_SYNTHETIC.csv` | Coordinator | Fabricated missing follow-up, withdrawal, unblinding and policy-leak events |
| [RESULTS.md](RESULTS.md) | Public synthetic audit | Case-by-case observed structural checks, blockers, and limits |
| [BUILD_DECISION.md](BUILD_DECISION.md) | Decision owner | GO/REVISE/STOP for **next process step**, distinct from software approval |

**Critical warning:** the public repo permits anyone to read both the fictional allocation table and fictional scoring packets. This is an illustration of **file-role separation only**, not evidence of genuine blinding. For actual use, the allocation key requires separate controlled storage and access that raters do not have.

## What was executed

The assistant created the five fixtures, ran an in-memory structural check, fetched those fixtures back from GitHub, rechecked referential integrity and scoring constraints, tested a deliberately injected arm-column rejection condition, and checked that a missing follow-up had no fabricated rating. It also inspected a deliberately explicit full-solution example against the written scaffold policy. The latter is a **human-readable policy comparison**, not a tested LLM guardrail or a general automatic classifier.

The actual observed check inventory appears in [RESULTS.md](RESULTS.md). **No manual study session was timed.** No real reviewer agreement, model policy fidelity, held-out task transfer or data-deletion operation was tested.

## Local, read-only fixture verification (optional)

After the PR is checked out, the following uses the Python standard library and does **not** create a project or make network calls:

```bash
uv run --no-project python -I -B - <<'PY'
from pathlib import Path
import csv

p = Path("docs/pilots/tabletop-001")
def read(filename):
    with (p / filename).open(newline="", encoding="utf-8") as stream:
        rows = list(csv.DictReader(stream))
    return rows

a = read("allocation_SYNTHETIC.csv")
b = read("blinded_packets_SYNTHETIC.csv")
x = read("rater_X_SYNTHETIC.csv")
y = read("rater_Y_SYNTHETIC.csv")
d = read("deviations_SYNTHETIC.csv")

assert len(a) == 5 and len(b) == 4 and len(x) == 1 and len(y) == 1 and len(d) == 4
assert not {"study_id", "assigned_arm"} & set(b[0])
assert len({row["packet_id"] for row in b}) == len(b)
assert {row["packet_id"] for row in b} <= {row["packet_id"] for row in a}
by_id = {row["packet_id"]: row for row in b}
for row in x + y:
    assert by_id[row["packet_id"]]["outcome_status"] == "submitted"
    assert all(row[k] in {"0", "1", "2", "3", "4"} for k in ("C", "R", "E"))
assert all(not row["blinded_artifact_ref"] for row in b if row["outcome_status"] != "submitted")
assert all(row["study_id"].startswith("SYN-") and row["consent_version"] == "DEMO-NOT-CONSENT" for row in a)
assert all(row["packet_or_study_id"] in ({r["study_id"] for r in a} | {r["packet_id"] for r in a}) for row in d)
print("EXP-002 synthetic fixture structural check: PASS")
PY
```

This is an inspectable **fixture check**, not a production evaluator, statistical implementation, or authorization for software implementation. A PASS does not establish real rater independence, anonymity, privacy or ethics approval.

**Decision:** keep this a manual research workflow pending independent governance and an actual timed human tabletop. [See decision rationale](BUILD_DECISION.md).
