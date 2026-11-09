# EXP-002 manual pilot preparation

**State:** research materials for review, **not permission to recruit or run a human study**. This package implements the next *documentation* decision from [DUAL-ASCENT's decision record](../research/DECISION_RECORD.md): test whether answer-generating versus scaffolded AI assistance changes **later unassisted engineering transfer**, while separately measuring supported task performance. The governing decision is **REVISE**.

## Materials and order of operations

1. [Protocol and readiness gates](EXP-002_PROTOCOL.md) — hypotheses, three conditions, allocation, timing, governance, analysis, stop criteria.
2. [Task-construction and assistance policies](EXP-002_TASK_PACK.md) — candidate task skeletons, information parity, held-out transfer, leakage controls; examples are **synthetic placeholders**, not approved/powered study items.
3. [Blind scoring and manual records](EXP-002_SCORING.md) — task-specific scoring rubric, separation of assignment key, minimized data ledger, missingness, adjudication, and toy dry-run.
4. [Preflight and go/no-go checklist](EXP-002_PREFLIGHT.md) — tabletop rehearsal, reviewer sign-offs, known open decisions and protocol deviation ledger.

## Phase 1D — human validation handoff (ready; human results outstanding)

The [Phase 1D review handoff](phase-1d/README.md) operationalizes the independent scoring and human-timed manual-method work. It includes a [proposed scoring amendment](phase-1d/RUBRIC_CHANGE_PROPOSAL.md), [two-person reviewer brief](phase-1d/INDEPENDENT_REVIEW_BRIEF.md), [operator stopwatch handoff](phase-1d/TIMED_OPERATOR_HANDOFF.md), [current Australian governance context](phase-1d/AUSTRALIAN_GOVERNANCE.md), and the [evidence gate register](phase-1d/GATE_REGISTER.md). **These are prepared materials, not completed independent human reviews, recorded human timing or ethics authorization.** The decision remains **REVISE / NO BUILD AUTHORIZED**.

## Phase 1C — executed synthetic code calibration

The [calibration-003 execution record](calibration-003/RESULTS.md) documents an **executed standard-library-only** test of the three *public fictional code submissions*: eight illustrative inputs × three implementations. See [tests/test_exp002_calibration.py](../../tests/test_exp002_calibration.py). The tests provide an objective **code-behaviour oracle**, not approved rubric scores, a human rater, a stopwatch measurement, or experimental results. An unresolved question about oversized integer input and the draft scoring rubric is recorded for independent human review.

## Phase 1B — independent manual-validation kit (prepared, not completed)

The [manual-validation-002 kit](manual-validation-002/README.md) includes public **synthetic** reviewer vignettes, blank independent scoring/adjudication/feedback CSV templates, a timed **human-operated** paper-versus-CSV procedure, and [review/ethics/build gates](manual-validation-002/DECISION_GATE.md). These are instruments to perform the next review, **not completed independent rater evidence or observed human timings**. The previous `REVISE` / **NO BUILD** decision remains in effect.

## Tabletop-001 — completed limited synthetic rehearsal

[Open the documented synthetic tabletop rehearsal](tabletop-001/README.md), its [executed checks and unresolved cases](tabletop-001/RESULTS.md), and its [REVISE / no-build decision](tabletop-001/BUILD_DECISION.md).

The agent created five fictional CSV worksheets and checked structural integrity and selected error cases. The tabletop case register records **7 narrowly scoped PASS checks, 2 BLOCKED cases, and 1 NOT_RUN case**. This is not a passed study-readiness gate, a human pilot, or a human learning result. The timed human manual-workflow comparison and independent rater/ethics review remain outstanding.

## Permitted next action

Conduct the **actual human-operated, stopwatch-timed paper/CSV exercise** and obtain **two separately completed human calibration ratings** using the [Phase 1D handoff](phase-1d/README.md) and the original [Phase 1B kit](manual-validation-002/README.md). Preserve private original worksheets; publish only a screened, non-identifying report after actual work. The synthetic software calibration remains a supporting oracle, not evidence that people learned anything.

## Not yet authorized

Participant recruitment or contact, use of personal GitHub histories or private chats, real test sessions, external model calls containing participant material, public upload of study records, or claims that a pilot has succeeded. Separate applicable ethics review/determination, researcher oversight, consent, and data-management approval must precede live collection.

No live dataset, AI service integration, CI workflow, learner evaluation service, performance ranking, or surveillance software belongs in this PR.

## Study rule

A task may be completed faster with AI without producing better **delayed independent transfer**. Preserve both measures separately; null and negative findings are valid results. If manual recording can support an actual decision without a new software platform, the documentation-only outcome is a success.

Relevant grounding: [EXPERIMENT_PROTOCOLS.md](../research/EXPERIMENT_PROTOCOLS.md), [SECURITY_PRIVACY.md](../research/SECURITY_PRIVACY.md), [ROADMAP.md](../research/ROADMAP.md).

*The Human Is The Upgrade. The AI Is The Instrument.*