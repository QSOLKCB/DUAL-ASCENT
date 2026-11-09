# EXP-002 Phase 1D — Human validation and research-readiness handoff

**Status:** READY TO REQUEST INDEPENDENT REVIEW; **NOT VALIDATED**.  
**Version:** EXP002-1D-PREP-001 · 2026-11-09.  
**Scope:** volunteer **protocol review and synthetic worksheet timing** only. **No participant recruitment, live learning intervention, or inference about human learning.**

## Purpose and inherited decisions

This phase addresses unfinished gates from [Phase 1B](../manual-validation-002/DECISION_GATE.md) following the [Phase 1C code calibration](../calibration-003/RESULTS.md). Phase 1C's 24 code observations are a technical oracle, **not independent reviewer ratings**. Phase 1D makes the next *human-owned* actions explicit; an AI cannot legitimately fill them in.

The controlling research decision is **REVISE / NO BUILD AUTHORIZED**. Completing a PR or adding a protocol cannot change that decision.

## Ordered handoff

1. **Methodology reviewers:** Two distinct real people separately use the [independent review brief](INDEPENDENT_REVIEW_BRIEF.md) and [pre-existing scoring template](../manual-validation-002/REVIEWER_SHEET_TEMPLATE.csv). Each reviews the three *fabricated* code responses and one missing response **before viewing the published execution oracle**. Do not present artificial ratings as human-reviewed.
2. **Measurement reviewer:** Review the [proposed rubric amendment](RUBRIC_CHANGE_PROPOSAL.md), particularly `NOT_SCORED` versus an unusable *submitted* answer, controlled errors, and missing input limits. A proposal is **not** an approved instrument.
3. **Human operator:** Execute the [timed two-method exercise](TIMED_OPERATOR_HANDOFF.md) with the original [blank local log](../manual-validation-002/OPERATOR_LOG_TEMPLATE.csv) and a physical or local stopwatch. A person must supply **actual** duration/error observations.
4. **Research/governance owner:** Use [Australian ethics guidance and decision questions](AUSTRALIAN_GOVERNANCE.md) to seek the applicable institutional/independent determination before **any live study**. An independent review of a public synthetic *protocol* is not itself enrollment in EXP-002.
5. **Maintainer:** Summarize only non-identifying, explicitly reviewed conclusions via [gate register](GATE_REGISTER.md); do not publish any person's raw sheets, contact details, private task materials, allocation keys or model chats.

## What can be claimed today

- **Executed**: synthetic MV-A/B/C behaviour tests documented in Phase 1C, and the earlier fixture-format verification.
- **Prepared**: two-person independent synthetic rubric review, amendment request, timed paper/CSV exercise, governance handoff, and evidence register.
- **Not run**: two independent human ratings, stopwatch-timed operator comparison, adjudicator approval, task-form validation, hosted-model fidelity testing or any participant study.
- **Not authorized**: implementation of the proposed research application and any diagnosis, monitoring, human-intelligence score or study recruitment.

### Exit gate

This phase can be marked **review materials complete** when this PR is reviewed. It cannot be marked **human validation complete** without evidence from actual independent reviewers and operator. Refer to [GATE_REGISTER.md](GATE_REGISTER.md), which retains every outstanding status.

**Expected outcome may be no software build.** A transparent spreadsheet that answers the named decision with acceptable burden is a success under the original DUAL-ASCENT rationale.

_The Human Is The Upgrade. Validation evidence must have a human witness._
