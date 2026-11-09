# EXP-002 — Independent Reviewer and Rubric Method

**State:** procedure **proposed**, human assessment **not executed**. Public synthetic materials only. Sources: [scoring anchors](../EXP-002_SCORING.md), [manual protocol](../EXP-002_PROTOCOL.md), and [reviewer calibration packet](REVIEWER_PACKET.md).

## Preparation

The coordinator supplies *only* the synthetic reviewer packet and blank scoring sheet to each of **two distinct reviewers**. The reviewers first score individually. They must not communicate their ratings until both are locked; they must not submit anything containing their personal name to the public repository.

For the *actual proposed human study*, a trusted coordinator would additionally isolate identity, consent and allocation keys from the reviewers **in a restricted storage location**. The public repo is not that restricted location. Public fixtures from tabletop-001 remain visible and prove **no genuine blinding**. Treat this exercise strictly as an evaluation of whether the scoring instrument is comprehensible.

### Independent scoring contract

| Step | Coordinator/reviewer operation | Required evidence, stored privately |
|---|---|---|
| 1 | Freeze packet version and source commit, then choose a reviewer pseudonym | Packet version, blinded file list, reviewer role, start order |
| 2 | Each reviewer separately reads [REVIEWER_PACKET.md](REVIEWER_PACKET.md) and [score anchors](../EXP-002_SCORING.md) | Independent rating sheet copy; do not inspect the other rater's sheet |
| 3 | Assign C, R, E independently for each submitted packet, with concise reasons; absent response gets `NOT_SCORED` and blank C/R/E | Completed sheet; timestamp of completion if locally approved |
| 4 | Coordinator locks both original sheets without modifications | Hash or immutable copy of each private worksheet; avoid claiming a trusted timestamp |
| 5 | Compare exact criterion-level agreements/disagreements and rubric ambiguities | Agreement denominators; original independent ratings retained |
| 6 | Request a third, independent qualified adjudicator **only if predeclared**; do not overwrite the two originals | Separate adjudication sheet/rationale and any unresolved values |
| 7 | Report method changes as versioned amendments *before* use on later cases | Explicit decision to REVISE, GO to separately approved human pilot, or STOP |

Do not treat arithmetic equality between invented scores as independent inter-rater reliability. The example packet's error cases are visible, and any independent human result on these public samples is only *calibration feedback*, not evidence for treatment efficacy.

### Scoring instructions for actual reviewers

For each submitted packet: inspect its code and submitted explanation. Apply the original 0–4 correctness/robustness/explanation anchors *as written*. Record problems that prevent a defensible judgment rather than quietly changing anchors. A task response whose functionality has not been executed must not automatically get perfect robustness from superficial code inspection.

The special `MV-D` packet is missing, not a failed attempt; mark `NOT_SCORED`, leave C/R/E empty, and record `FOLLOWUP_MISSING`.

**Potential ambiguity to log rather than silently resolve:** the original rubric says a C=0 response can be "missing/unusable," while the missingness rule separately says missing submissions should not get a zero. The stricter missingness rule governs entirely absent submissions; a *submitted but unusable response* may receive 0. Ask independent measurement reviewers whether the score anchors require amendment for clarity.

### Blindness/privacy checks

- Do not pass study arm, model/provider, real study IDs or coordinator allocation sheet to raters.
- Public calibration packet IDs do not encode an arm or identity; source text may still reveal code style or AI usage. Capture suspected masking failure as an observation.
- In a real study, store coordinator mapping separately with role-based access; do not infer privacy from CSV field omissions or a folder name.
- Do not compare raw unredacted chats or private code histories. No natural-person data are required for this exercise.

## Assistance-mode parity review (T-07)

Before any *live* participant use, a research lead must populate and freeze this comparison. Empty cells are **BLOCKED**, not automatically equal.

| Element | H: human-only | A: answer-generating AI | S: scaffolded AI | Reviewer conclusion |
|---|---|---|---|---|
| Runtime/Python version | TBD | TBD | TBD | BLOCKED |
| Identical practice prompt and frozen documentation | TBD | TBD | TBD | BLOCKED |
| Allowed practice time and help budget | TBD | TBD | TBD | BLOCKED |
| Model/provider and settings | N/A | TBD | TBD | BLOCKED |
| Provider data processing and consent | N/A | TBD | TBD | BLOCKED |
| Response-policy violation handling | N/A | TBD | TBD | BLOCKED |
| Independent unaided held-out forms | TBD | TBD | TBD | BLOCKED |

"Same model settings" must be documented for A/S; identical access to local docs and runtime should be established across all arms. The S arm's instruction to avoid full solutions is a **policy target**, not an assured technical control.

## Statistical decision boundaries

No inter-rater reliability, equivalence of task forms, calibration metric, sample-size requirement, noninferiority margin or effect estimate is authorized here. A qualified methodologist must choose a suitable statistic for ordinal scores and **predeclare thresholds** and adjudication rules before using them to judge instrument readiness. With three submitted public vignettes, reliability estimates would not generalize.

If reviewers disagree or cannot score confidently, that is useful evidence to **revise the instrument**, not a reason to inflate a passing score.

**Do not invite real participants before written applicable ethics determination and the complete [preflight](../EXP-002_PREFLIGHT.md) gate.**
