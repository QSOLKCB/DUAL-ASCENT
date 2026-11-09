# EXP-002 Phase 1B — Manual Validation Kit

**Version:** EXP-002-MV-002, 2026-11-09  
**Status:** MATERIALS PREPARED, **independent human review NOT RUN**.  
**Scope:** Synthetic protocol calibration, manual records, and human-operated timing. No real participants, AI services, implementation platform, or human-outcome claims.

This pack follows [tabletop-001's recorded REVISE decision](../tabletop-001/BUILD_DECISION.md). Its purpose is to make the three outstanding research-method gates **actually performable by an independent reviewer** without pretending an AI generated validation can substitute for a human review.

## Ordered procedure

1. Read the [reviewer packet](REVIEWER_PACKET.md) **without** first consulting another rater. It contains synthetic response artifacts and task requirements, **not** final held-out study questions.
2. Each independent reviewer makes a **separate private copy** of [REVIEWER_SHEET_TEMPLATE.csv](REVIEWER_SHEET_TEMPLATE.csv) and scores task-specific correctness (C), robustness (R), and explanation (E), or uses `NOT_SCORED` where an artifact is absent. The same reviewer must not fill in two purportedly independent worksheets.
3. The coordinator records when packet access occurred, checks for leaked condition/identity cues, and collects the separately completed sheets. Record disagreements and adjudication **without overwriting original scores**; see [reviewer method](REVIEW_METHOD.md).
4. An operator conducts the [timed manual-workflow rehearsal](TIMED_OPERATOR_PROTOCOL.md) with fabricated records; enter *actual observed* clock times, errors, and recoveries in a local copy of [OPERATOR_LOG_TEMPLATE.csv](OPERATOR_LOG_TEMPLATE.csv). **No timings are prefilled.**
5. Review [governance and decision gate](DECISION_GATE.md) after the prior steps; mark each gate PASS, FAIL, BLOCKED or NOT_RUN with direct evidence.

## Public repository limitations

The exercises and their response code are publicly accessible. Because the synthetic coordinator key was also public in tabletop-001, this package **cannot prove genuine concealed allocation, confidential evaluation, or prospectively blinded human-subject research**. Role separation below is a procedural rehearsal only.

The files in this folder are intended as *blank templates* and *fabricated example tasks*. Never commit real reviewer identities, private timing notes, participant artifacts, provider transcripts, consent records, restricted allocation keys or other personal information to GitHub.

## Gate map

| Pre-existing finding | New concrete instrument | What remains external |
|---|---|---|
| T-04: withdrawal governance BLOCKED | [Decision gate](DECISION_GATE.md) with approval/retention/withdrawal fields | Research lead, ethics/IRB determination and approved withdrawal workflow |
| T-07: intervention parity BLOCKED | [Reviewer method](REVIEW_METHOD.md) treatment-equivalence checklist | Specific frozen model, provider, budget, tasks, and independent methodological review |
| T-08: manual-workflow time NOT_RUN | [Timed exercise](TIMED_OPERATOR_PROTOCOL.md) and a blank log | An **actual** human using a clock and recording errors/duration |
| F-001/F-002: masked packets & scoring unvalidated | [Reviewer packet](REVIEWER_PACKET.md), two separate unfilled copies of score sheet | Two distinct qualified reviewers, predeclared agreement rubric and adjudicator |

**Next decision:** Only after actual reviewer results and governance checks should anyone decide whether a real participant study is appropriate. A separate demonstration that manual recording is inadequate is required before importing the proposed software.

_The Human Is The Upgrade. The AI Is The Instrument._
