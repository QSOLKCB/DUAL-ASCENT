# EXP-002 Phase 1C — Executed Synthetic Calibration

**Recorded:** 2026-11-09  
**Status:** **Executed narrow code-behaviour test**, not independent human validation.  
**Source under examination:** [Phase 1B synthetic reviewer packet](../manual-validation-002/REVIEWER_PACKET.md) and [draft rubric](../EXP-002_SCORING.md).  
**Executable reference:** [tests/test_exp002_calibration.py](../../../tests/test_exp002_calibration.py).

## Objective

Provide testable evidence for calibrating correctness/robustness judgments on the three **fabricated, public** submissions MV-A, MV-B, MV-C. Explicitly leave MV-D **NOT_SCORED** because no artifact exists. These are neither real learner responses nor secure held-out research materials. A human reviewer must still judge the explanation dimension and whether the rubric is comprehensible; a program cannot certify independent rating.

## Executed command and result

Executed locally under **CPython 3.13.5, Linux**, using the standard library:

```sh
uv run --no-project python -I -B -m unittest discover -s tests -v
```

Observed output: **3 test methods passed** with no errors (0.001 s reported). The main test compares **8 named scenarios × 3 fixed synthetic vignettes = 24 observed behaviours**, using subtests. Two further checks verify that the missing artifact keeps blank scores and that matching the public sample does not imply success on an alternate input. No GitHub Actions execution, participant testing, independent human rating or stopwatch data is claimed.

The Python file is a **line-by-line transcription of the public MV-A/B/C functions with function names changed**. It does not execute arbitrary downloaded code, fetch repository files, process participant submissions, call AI providers or ingest private artifacts. The GitHub blob of the committed test source matched the identical locally executed file: `7401bd52c9b3bcf38f19fe560aea609b94dd4f07`. This is a **Git object ID**, not a SHA-256 research attestation.

## Observed 8 × 3 matrix

`ValueError` and `KeyError` in this table are the exception **type names** observed. For MV-A's missing header, ValueError is deliberately raised; MV-B's missing header produces an uncontrolled KeyError. Other MV-B conversion errors are unhandled.

| Input case | MV-A | MV-B | MV-C |
|---|---|---|---|
| Published toy example, includes invalid `?` | `(3,20)` | `ValueError` | `(3,20)` |
| Alternate valid rows | `(2,7)` | `(2,7)` | `(3,20)` |
| Invalid `n/a` quantity | `(1,11)` | `ValueError` | `(3,20)` |
| Non-ASCII digit `٠` | `(1,11)` | `(2,11)` | `(3,20)` |
| Whitespace-surrounded ` 11 ` | `(0,0)` | `(1,11)` | `(3,20)` |
| Missing required header | `ValueError` (deliberate) | `KeyError` | `(3,20)` |
| Valid header, no data rows | `(0,0)` | `(0,0)` | `(3,20)` |
| Valid zero quantity | `(1,0)` | `(1,0)` | `(3,20)` |

**Interpretation:** MV-A follows the ordinary stated contract under these examples. MV-B fails invalid-data handling and strict ASCII digit classification; MV-C returns the published answer for every input, so passing the visible example is insufficient to establish transfer or generalization. This matrix supports **calibration discussion**, not automatic 0–4 grades.

## Additional executed exploratory boundary

A separate local, *non-regression* probe passed `5000` ASCII nines in the quantity column. On CPython 3.13.5, **MV-A and MV-B raised ValueError** because Python's default integer-string digit limit is 4300; MV-C returned its fixed answer. This probe is environment- and configuration-dependent and is **not** counted in the 24-observation passing matrix.

**Unresolved task specification:** The published task permits non-negative ASCII-digit quantities but states no maximum field length or resource policy. An input-length bound, numerical overflow/resource behaviour, and whether conversion failures count as controlled errors must be explicitly chosen and frozen **before** any human scoring. Do not retroactively penalize a synthetic submission using an unstated threshold.

## Rubric issues for independent review

1. **Missing vs unusable:** [Draft scoring rubric](../EXP-002_SCORING.md) gives `C=0` for "missing/unusable response" but separately requires entirely absent responses to remain `NOT_SCORED`. Proposed explicit amendment: `C=0` is permitted only for an actually *submitted but unusable* artifact; absence/withdrawal stays missing with all C/R/E blank. A qualified measurement reviewer must approve the wording before use.
2. **Controlled vs uncontrolled errors:** A deliberately signalled `ValueError("missing required column")` must be evaluated differently from an accidental `KeyError` or conversion crash. Define concrete hidden tests and scoring boundaries.
3. **No blind causal inference:** The test functions and output oracle are publicly accessible. A rater exposed to these cases may use them for **calibration**, but this does not validate genuine condition masking, secure held-out test design, real-world transfer, or inter-rater reliability.
4. **Scoring is not a truth oracle:** A passing test suite establishes observed behaviour for eight sample inputs. It does not establish the explanation score, soundness on all possible inputs, language-independent learning or participant capability.

## Research status / gate decision

- Technical calibration test: **PASS in the reported environment**.
- Draft rubric amendment: **PROPOSED; independent review pending**.
- Two distinct human raters with retained original independent sheets: **NOT_RUN**.
- Timed human paper-vs-CSV comparison: **NOT_RUN**.
- Research governance, ethical determination, consent, preregistration: **BLOCKED**.
- Proposed research platform implementation: **NO BUILD AUTHORIZED**.

**Next concrete human tasks:** Apply the blank [reviewer scoring template](../manual-validation-002/REVIEWER_SHEET_TEMPLATE.csv) independently **before reading this oracle**, obtain a measurement-review decision on the ambiguities, then time the documented manual procedure with fictional records. Only then consider a separate software utility decision.

**EXP-005 remains provisional and outside this PR.**

_The Human Is The Upgrade. Evidence of code behaviour is not evidence of learning._
