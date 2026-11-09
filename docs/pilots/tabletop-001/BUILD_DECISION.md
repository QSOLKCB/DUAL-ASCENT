# DUAL-ASCENT decision record — EXP-002 tabletop-001

**Date:** 2026-11-09  
**Decision:** **REVISE** study readiness; **DO NOT AUTHORIZE SOFTWARE IMPLEMENTATION**.  
**Decision scope:** synthetic technical / documentation preflight only; the independent research [REVISE recommendation](../research/DECISION_RECORD.md) remains controlling.

## Decision under test

> Should a bounded new engineering skill be taught using human-only documentation, an answer-generating assistant, or a scaffolded assistant, if supported task quality and later independent transfer are measured separately?

This question is answerable only after valid human-outcome collection; no such collection occurred. A workbook may still be the optimal research instrument even if a multi-agent software platform is technically possible.

## What the rehearsal established

- Fictional coordinator and rater worksheets can represent **submitted**, **missing**, **withdrawn**, **unblinding-rejected** and **policy-leakage** cases without silently converting missing outcomes to zero.
- A restricted allocation mapping and arm-free scoring packet can be **specified** and structurally checked. Because this repository publicly contains both, actual independent blinding has not been tested.
- Separate fictional ordinal ratings can be retained, but rater agreement or adjudication cannot be inferred from invented scores.
- One deliberately arm-bearing header is explicitly rejected in the synthetic check. One explicit completed-solution policy breach is flagged as a **constructed example**, not model fidelity evidence.
- The worksheets are already simple enough that **no unique need for a new database, dashboard, service, local agent, or recorder has been demonstrated**.

## Decision matrix

| Option | Current evidence | Recommendation |
|---|---|---|
| Stop the research entirely | No reason to conclude the research question has no value | Not supported |
| Keep the research and run another non-participant manual rehearsal | Clear unresolved masking, rubric, governance and time-burden questions | **Recommended** |
| Recruit people immediately | Consent, ethics determination, private held-out form, allocation and rater controls not validated | **Prohibited by current readiness gates** |
| Import Monica's rev3 implementation as the next PR | No measured improvement over manual process and no software-authorization decision | **Defer** |
| Build a telemetry dashboard or AI dependency classifier | Outside scope and contrary to privacy safeguards | **Reject** |

## Prerequisites for another milestone

1. Assign a real decision beneficiary and a qualified research lead, without claiming authorization in this repository.
2. Obtain applicable ethics or institutional determination **before** recruitment or personal-data collection.
3. Lock assistance mode, model and provider disclosures, common documentation, task complexity, help allowance, time budget, and private assessment forms.
4. Have real independent reviewers evaluate the scoring rubric, masked packets and task-form equivalence with **synthetic artifacts** first.
5. Have a human operator run a **timed** manual worksheet exercise using only invented records, recording total time, mistakes, masking failures and corrections. Do not substitute automated generation time for human work.
6. Preregister missingness, attrition, H1/H2 contrasts, noninferiority margin, scoring agreement rule, sampling rationale, and stopping criteria if a live pilot is contemplated.
7. Reconsider a standard-library research utility **only after** the manual method demonstrably fails a real audit/reproducibility need. Put that rationale in a separate decision record.

## Release disposition

This PR is a **synthetic rehearsal and findings artifact**: no datasets from people, no active participants, no inference about learning, no infrastructure, no product implementation, and no requirement that more software be built.

**EXP-005** remains an independent provisional research candidate. Neither its orchestration hypotheses nor its methods were tested in this rehearsal.

### Sign-off status

- Agent-authored synthetic structural preflight: **executed and documented**.
- Independent human methodological review: **pending**.
- Ethics/privacy authorization: **pending**.
- Real manual burden comparison: **not run**.
- Software build decision: **not authorized**.

> The Human Is The Upgrade. A successful experiment may end with a spreadsheet and a decision not to build anything.
