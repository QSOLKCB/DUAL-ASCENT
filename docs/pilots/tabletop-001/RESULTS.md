# EXP-002 tabletop-001 — Execution Record and Findings

**Session:** `EXP002-TABLETOP-001`  
**Date:** 2026-11-09 (Australia/Adelaide; calendar date only, no asserted stopwatch times)  
**Agent:** ChatGPT, preparing fictional fixtures and performing programmatic structural checks  
**Source:** [PR #2's preflight specification](../EXP-002_PREFLIGHT.md)  
**Scope:** synthetic worksheet structure and explicit protocol-case reasoning only. **No participants, independent raters, recruitment, live assistant behavior, longitudinal study, approvals, or real-world skill observations.**

## Evidence preservation

Five ASCII/UTF-8 CSV fixtures were written on `research/exp-002-synthetic-tabletop-001`, then retrieved from GitHub and inspected. These GitHub **blob object IDs** document committed file identity; they are **Git SHA-1 object identifiers, not SHA-256 research receipts**:

| Fixture | Git blob object ID |
|---|---|
| `allocation_SYNTHETIC.csv` | `aa61aa84f7edcdfe5a90386019dbc7e8bdfcd789` |
| `blinded_packets_SYNTHETIC.csv` | `739afd9e3d08b1c672ff2f2d5daf64c0f4ee75aa` |
| `rater_X_SYNTHETIC.csv` | `37bfde852bb5d2e325266353aeb89af155d083fa` |
| `rater_Y_SYNTHETIC.csv` | `5cb3edcece9b4843416b94fde0191efe719a54e7` |
| `deviations_SYNTHETIC.csv` | `0871acf56ebaafc5be39dbb67330ff4673720fe0` |

A tool-executed **in-memory structural check** (not a committed runtime tool or CI job) covered five coordinator allocations, four blinded packet rows, two *invented* ratings and four fabricated deviation events. A second check fetched the resulting GitHub files and repeated the invariants.

### Executed checks

| ID | Check | Observed result | Limit |
|---|---|---|---|
| V-01 | Blinded-packet headers omit `assigned_arm` and `study_id`; packet IDs unique and coordinator-linked; scored packets are submitted; C/R/E integers 0–4; non-submissions have no artifact | **PASS** | Structure only; all files are publicly readable |
| V-02 | Inject a hypothetical `assigned_arm` column into a rater-visible packet header and apply an explicit denylist check | **PASS — rejected** | Deliberately simple header condition, not a general privacy/DLP system |
| V-03 | Missing follow-up `PKT-002` has no fictional rater row or artifact | **PASS** | Does not test real participant attrition |
| V-04 | Compare an obviously complete synthetic assistant solution against the scaffold prohibition | **PASS — recognized as a violation by explicit example inspection** | No model was called; no evidence that actual AI prompting enforces the policy |
| V-05 | Every coordinator row carries `SYN-` and `DEMO-NOT-CONSENT` | **PASS** | Fictional test data only; not evidence of consent |

**Not executed:** a stopwatch-measured paper/spreadsheet task; separate human rater sessions; a retained real consent/withdrawal process; a model fidelity session; GitHub CI. No independent lab, regression gate or live privacy guarantee is claimed.

## Case-by-case tabletop disposition

Cases are from [EXP-002_PREFLIGHT.md](../EXP-002_PREFLIGHT.md). A `PASS` below refers only to the explicitly stated **synthetic structural or rule-check**, not to the corresponding live-study readiness gate.

| Case | Status | Record or observation | Outstanding condition |
|---|---|---|---|
| T-01 — valid submission | **PASS (synthetic structure)** | `PKT-001` present; `RATER-X` and `RATER-Y` have separate invented 0–4 ratings; no arm in rater rows. | No independent human scoring; public data do not establish real blinding. |
| T-02 — partial answer | **PASS (rule illustration)** | Fabricated example: a response returns the toy delayed output `count=3,sum=20` but mishandles a missing required header. A perfect robustness score must **not** follow. The two R=2 entries are fictional illustration only. | Actual answers, edge-case oracles and rating anchors not locked or tested. |
| T-03 — missing follow-up | **PASS (synthetic structure)** | `PKT-002` has `missing` status, blank artifact and no C/R/E rating; deviation `DEMO-001` retained. | Final missing-data estimand still requires preregistration. |
| T-04 — withdrawal | **BLOCKED (governance)** | `PKT-003` is marked `withdrawn`; `DEMO-002` calls for pause and approved disposition. | No approved real consent scope, retention/deletion pathway, incident contact or jurisdictional determination. |
| T-05 — unblinding | **PASS (synthetic rejection)** | `PKT-004` rejected; `DEMO-003` logged. Injected arm-bearing header fails the allowlisted rater-packet shape. | Actual masked packet generation/access protection not demonstrated. |
| T-06 — scaffold leakage | **PASS (policy classification illustration)** | Fictional `SYN-005` is `policy_leakage`; `DEMO-004` records the violation. | Model prompt fidelity and monitoring/remediation policy not tested. |
| T-07 — equality of access | **BLOCKED (protocol)** | Protocol calls for identical documentation, runtime, time and assistance ceiling, but concrete values and model/provider are not locked. | No treatment equivalence or fidelity check can be claimed yet. |
| T-08 — manual vs software | **NOT_RUN** | Five worksheets illustrate a workable low-tech record structure; **no independently timed paper/spreadsheet exercise occurred**. | Actual burden/error comparison and named decision owner's go/no-go remain open. |
| T-09 — evidence boundary | **PASS (claim review)** | No synthetic rating or checksum is interpreted as a human-learning effect, diagnosis or real predictive skill. | Live outcomes require a separate authorized study. |
| T-10 — data-leak | **PASS (synthetic scope only)** | Fixtures have invented IDs and no direct personal fields. The only intended allocation key is fabricated. | No general secret scanner, privacy audit, or approved real-data export process. |

**Aggregate for the proposed tabletop cases:** **7 PASS (narrow synthetic checks), 2 BLOCKED and 1 NOT_RUN.** These are *not* an empirical-study success percentage and should never be graphed as one.

## Findings and required corrections

### F-001 — Public files cannot demonstrate true rater blindness

The mock rater file excludes the assignment field, but its matching public coordinator file reveals the fictional arm. A real study must physically separate access and maintain a role-specific redacted packet export. Existing documentation implies this requirement, but the rehearsal shows why **structural omission alone is insufficient**. **Severity:** blocking for live study.

### F-002 — Ratings are placeholders, not reliable measurements

The two fictional RATER-X/Y rows have deliberately different C ratings. This proves only that different values can be stored without overwriting one another. It does not prove independent rating, agreement, adjudication, correctness, robustness, or rubric construct validity. **Severity:** blocking for human-study inference.

### F-003 — Withdrawal disposition not authorized

`WITHDRAWN` can be represented without inventing an outcome. Actual removal, future collection blocking, contact, backups and de-identification policy require the responsible researcher and ethics approval. **Severity:** blocking for live study.

### F-004 — Assistance parity and task-form security unresolved

The practice instructions are illustrative; fixed model, budget, time windows, randomized assignment, privately held-out equivalents and hidden scoring oracle are missing. Public toy prompts are invalid as genuine transfer tests. **Severity:** blocking for live study.

### F-005 — No measured reason to build software yet

For a handful of mock rows, transparent CSV worksheets expose missingness and rule violations adequately. This illustrates manual feasibility at tiny scale, but a true cost/error comparison was **NOT_RUN**. No conclusion about actual operator burden or automation ROI is supported. **Severity:** stop software implementation pending evidence.

## Result

**REVISE:** Preserve documentation/manual-first direction. The next authorized work is an *independent human-reviewed, still-synthetic timed paper/spreadsheet rehearsal*, task/rubric validation and a written research-governance determination. The separate [build/no-build decision](BUILD_DECISION.md) remains **NO BUILD AUTHORIZED**.

**Provenance limitation:** GitHub blobs and CSV integrity checks establish a narrow reproducible file state. They do not prove independent human review, chronology, consent, privacy compliance, causality or a learning effect.
