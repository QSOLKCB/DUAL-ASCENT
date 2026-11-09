# EXP-002 — Synthetic Preflight, Decision Gates and Handoff

**Status:** PREPARATION ONLY. No human-subject study, ethics authorization, preregistration, analysis, model-service use or pilot result has been performed by adding these files.

## Purpose

Exercise the manual EXP-002 workflow **with fabricated records only** to establish whether documentation, paper forms and an offline spreadsheet can answer the intended research decision. This is a manual-method feasibility rehearsal, not evidence about AI-assisted learning.

Read [protocol](EXP-002_PROTOCOL.md), [synthetic task pack](EXP-002_TASK_PACK.md), [scoring](EXP-002_SCORING.md), and the controlling [research decision](../research/DECISION_RECORD.md) before completing the checklist.

## A. Tabletop rehearsal cases (all synthetic)

| Case | Rehearsal action | Expected outcome |
|---|---|---|
| T-01 — valid submission | Create a fabricated held-out response packet; assign two masked fictional rater IDs | Distinct packet ID, no arm label in rater packet; two independent rating rows retained |
| T-02 — partial answer | Fabricate a response with correct sum but missing-header failure | Correctness and robustness are separately judged; no automatic perfect score |
| T-03 — no follow-up | Mark a fabricated delayed test as not returned | Missingness retained; no zero or fabricated response |
| T-04 — withdrawal | Pretend a study ID has withdrawn before follow-up | Collection paused; coordinator identifies approved withdrawal/retention workflow; no public re-identification |
| T-05 — unblinding | Add an arm/provider marker to a fabricated blinded packet | Packet rejected or re-masked with deviation recorded; no blind rating claimed |
| T-06 — scaffold leakage | Give a synthetic scaffolded dialogue a complete solution | Policy violation recorded; don't reclassify as successful scaffolded treatment |
| T-07 — equality of access | Compare treatment instructions, docs and time limits | Apart from assistance policy, environments and materials match or gaps documented |
| T-08 — manual-vs-software | Time a fictitious run using a manual ledger; identify unavoidable errors and effort | Explicit decision whether code adds real, material reproducibility value; no 'must build' assumption |
| T-09 — evidence boundary | Ask if the synthetic pilot demonstrates an effect on skill retention | Correct answer is **no**; all claims remain hypothesis or software/design checks |
| T-10 — no data-leak | Inspect all PR files for names, private messages, raw real responses, secrets or implicit provider calls | No real participant data and no collection infrastructure |

**Execution state:** all ten are **proposed**, not run. A reviewer marks each `PASS`, `FAIL`, `BLOCKED` or `NOT_RUN` and records the reviewer/date/evidence in a **local** worksheet. Do not check a case as PASS merely because its expected result is documented.

## B. Proposed manual execution receipt

Copy this blank form into a **local** log (do not commit real participant records):

| Item | Reviewer to complete |
|---|---|
| Rehearsal identifier |  |
| Document revisions/commit SHA |  |
| Start/end date |  |
| Fictional example identifiers only |  |
| Cases attempted and outcomes |  |
| Disagreements / burden / usability notes |  |
| Was the protocol understandable without software? |  |
| Did any critical control fail? |  |
| Amendment requests |  |
| Reviewer name or approved role (kept locally) |  |
| Decision and rationale |  |

A local cryptographic digest, if used, proves only byte integrity. It does not independently establish chronology, consent, veracity or research validity.

## C. Human-subjects readiness checklist

All must be resolved **before** contacting or recruiting real participants:

- [ ] A named, qualified research lead and accountable decision beneficiary are identified.
- [ ] Written applicable ethics/IRB approval, exemption or determination is retained.
- [ ] Recruitment, compensation and participant dependency safeguards are reviewed.
- [ ] Versioned plain-language consent, withdrawal rules and contacts are approved.
- [ ] Data inventory, access roles, storage, security, retention and export review are complete.
- [ ] Hosted/local model choice, exact provider terms, model version and data transmissions are authorized; no unauthorized calls.
- [ ] Tasks, parallel forms, baseline screen and ability-level limits have independent validation.
- [ ] Three condition scripts, help budgets, timing windows and intervention fidelity checks are frozen.
- [ ] Independent allocation and blinded scoring packet generation are rehearsed.
- [ ] Two-rater rubric and resolution policy are reliable under a predeclared agreement measure.
- [ ] Preregistration specifies estimands, SESOI/noninferiority margin, primary contrasts, missingness, multiplicity, power simulation and planned exclusions.
- [ ] Adverse-event, pausing, incident, withdrawal and contact procedures are operable.
- [ ] Decision owner approves manual-method utility and an explicit **build / don't build** comparison.

An unchecked item is **not** permission to improvise. Software maturity is orthogonal to these research safeguards.

## D. Project decision rubric

| Recommendation | What would justify it |
|---|---|
| **GO (manual pilot only)** | Applicable ethics and data approvals completed; validated tasks/rubrics, feasible blinded workflow, frozen protocol and preregistration, clear human decision; consented recruitment may then be considered by the qualified lead |
| **REVISE** | Task forms, masking, evaluation, consent, provider handling or manual process are incomplete but repairable |
| **STOP / documentation-only** | No real decision/beneficiary; manual design not feasible or sufficiently safe; pilot cannot ethically proceed; the proposed software is activity for its own sake |

The decision for **software implementation** is separate. Even a successfully completed manual pilot does not automatically justify the rev3 proposed utility. The research lead must demonstrate repeatable work for which a local validation/receipt system measurably reduces error or burden compared with a spreadsheet/notebook.

## E. Proposed reviewer handoff

| Review owner | Specific questions |
|---|---|
| Research methodology | Are unfamiliar-skill transfer, forms, contrasts, rater agreement and missingness well-defined? |
| Ethics/privacy | Is recruiting, obtaining consent and processing external model requests justified and appropriately approved? |
| Measurement reviewer | Can independent assessors apply the rubric without knowing the treatment, and detect test leakage? |
| Engineering reviewer | Are the toy examples safe, deterministic and correctly described? Is a software build actually necessary? |
| Maintainer | Does the PR remain documentation-only? Are null/negative outcomes protected and EXP-005 out of scope? |

## F. Protocol amendment ledger — template

| Amendment ID | Affected document/version | Reason for change | Approved by | Effective date | Effect on prior data |
|---|---|---|---|---|---|
| DEMO-ONLY | EXP-002-PREP-v0.1 | Placeholder; no amendment submitted | N/A | N/A | None |

Predeclared amendments precede their effective use. Do not rewrite previous results or retain only favourable pilot observations.

## Release and publication boundaries

A merged preparation PR establishes **reviewable documentation**, not ethical approval, a feasibility-pilot result, participant consent, validated measurement, an AI-learning claim, or authorization to merge implementation code.

After this review, the next useful action is a **synthetic manual rehearsal** and research-governance review. If those fail, revise the documents before proposing a real pilot. **EXP-005 remains provisional and out of scope.**