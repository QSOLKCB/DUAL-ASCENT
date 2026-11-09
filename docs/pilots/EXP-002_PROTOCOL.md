# EXP-002 — Manual Pilot Protocol (research draft)

**Protocol version:** `EXP-002-PREP-v0.1`  
**Status:** NOT APPROVED; preregistration, ethics determination, allocation and measures not finalized.  
**Controlling decision:** [REVISE](../research/DECISION_RECORD.md); manual feasibility before proposed software.  
**Source:** [EXP-002 experiment specification](../research/EXPERIMENT_PROTOCOLS.md).

## 1. Human decision and falsification

The decision owner must state **before enrolment** whether an answer-producing or hint-scaffolding assistant should be used to teach a bounded new engineering skill, conditional on supported-task quality **and** delayed independent performance. A software build is not the default consequence.

- **H1 (superiority):** scaffolded AI produces higher delayed held-out unaided transfer than answer-generating AI.
- **H2 (noninferiority):** scaffolded AI is not inferior to human-only documentation practice by more than a preregistered, educationally meaningful margin.
- **Secondary:** answer-generating AI may improve initial supported task completion but have different effects on later transfer.
- **Contradictory outcomes:** no meaningful difference between arms, human-only outperforming both, greater answer-assisted transfer, or highly heterogeneous effects are all valid results. Do not define success retrospectively.

Neither model output quality nor a pilot's sample-size-limited comparison demonstrates changed intelligence. This protocol measures performance on specified tasks only.

## 2. Three conditions and parity

| Arm | During learning/practice | Material all arms receive |
|---|---|---|
| H — Human-only | Fixed local documentation and task sheet; no AI assistance during practice | Identical instructions, task aims, example input formats, time budget, editor/runtime access and help policy |
| A — Answer-generating AI | May request code/solutions, explanations, debugging and direct answers | Same local docs and task sheet; same predeclared assistant/model provider/configuration as S except policy |
| S — Scaffolded AI | Hints, questions, explanation and error diagnosis; **no complete task solution** | Same local docs and task sheet; identical model provider/configuration and interaction ceiling as A |

Assistance is **unavailable to every arm during immediate and delayed held-out assessments**. This restriction covers only the specified research assessment, not participants' ordinary lives. External AI/model calls require separate operator approval, explicit participant disclosures, and privacy review. A locally run model or simulated dialogue could be used for dry-runs, but must not be silently substituted in a confirmatory design.

## 3. Participants, tasks and logistics — subject to authorization

Target consenting adults learning a **genuinely unfamiliar**, safely sandboxed programming-library concept. Define objective inclusion and experience criteria; screen for prior knowledge without coercion. Do not recruit direct reports, students or dependent individuals without separately reviewed safeguards. Pilot size is to be justified for feasibility/variance estimation, **not** effect-significance claims.

Prepare at least three reviewer-matched task forms: practice, immediate held-out and delayed held-out transfer; create parallel alternate forms to counterbalance task difficulty. Use inert fixtures only; no network, secret keys, or participant repositories. The [task-pack examples](EXP-002_TASK_PACK.md) are brainstorming/synthetic rehearsal items, not locked study tasks.

Predeclare a fixed practice session duration and help allowance for all arms. Proposed chronology:

| Visit | Sequence | Record |
|---|---|---|
| Pre-session | Approved consent and pre-assignment baseline, experience screen, anonymous study ID | eligibility status; consent version; baseline results without identifying details in score file |
| Day 0 | Independently concealed, blocked assignment; standardized practice under assigned policy | arm held in restricted allocation file; practice outcome; timer; help count |
| Day 0, after practice | **Unaided** immediate assessment using form not shown during learning | scored response packet and completion status |
| Day 7–14 | **Unaided** delayed held-out task; schedule rule fixed before enrolment | form/version; response; missingness and known deviations |
| After scoring | Condition-masked scoring by two independent reviewers, agreement check and controlled adjudication | two primary ratings; adjudication; unresolved disputes; review timestamp |

## 4. Design controls and contamination safeguards

- Block or stratify allocation by baseline score and relevant programming experience; sequence prepared by an independent coordinator, withheld until assignment. Preserve the seed/algorithm or a signed allocation worksheet with restricted access.
- Counterbalance task forms and session sequence where valid. Validate forms for difficulty **before** using a final locked set. No adaptation of test tasks in response to observed arm outcomes.
- Freeze the instructions, task corpus, hint/answer policies, documentation snapshot, time windows, scoring rubric, response examples, model/version/settings and permitted-help policy before the first live assignment.
- Record intervention fidelity: whether a scaffolded response accidentally contained the final solution; whether any answer-arm interaction was unavailable; any differential errors or tool outages.
- Keep raters blind to arm, baseline identity, assistance logs and session-order cues. Do not embed arm labels in a scoring filename. A separate coordinator keeps the allocation and identity maps.
- Log withdrawals, incomplete tests and unexpected outside help under predeclared missingness/contamination rules. Do not drop poor performers from the analysis.
- Distinguish noncompliance from withdrawal; never punish outside ordinary AI use beyond the controlled assessment's declared conditions.

## 5. Outcomes and proposed statistical plan

**Primary:** delayed unaided held-out transfer rubric, scored on task-specific correctness, robustness and explanation (see [scoring](EXP-002_SCORING.md)); retain component subscores and task version. Do not mislabel the resulting task score as general human ability.

**Co-reported task-phase measures:** correctness/quality and elapsed time. **Secondary:** immediate held-out score, code reading/debugging, confidence calibration (if consented), intervention fidelity, follow-up burden and missingness. Report each separately, including null/negative outcomes.

Proposed confirmatory analysis, to be finalized before live recruitment: intention-to-treat ANCOVA/mixed regression of delayed transfer on assigned arm, baseline result, task form and experience stratum; preregister H1 and H2 contrasts, one-sided noninferiority margin for H2, family-wise or FDR multiplicity handling where applicable, assumptions and sensitivity analyses. Report group distributions, adjusted contrasts, uncertainty intervals and unassisted-test missingness by arm.

**No numeric sample-size, noninferiority margin, minimum effect, agreement threshold, stopping boundary or final model is approved by this document.** First gather expert review and a strictly feasibility-oriented dry run, then perform sample-size simulation based on the proposed measurement structure and attrition assumptions. Any small trial must be labelled **feasibility only**.

## 6. Human-subjects and data protection gate

Before participant recruitment, obtain jurisdiction-appropriate ethics/IRB approval/exemption/determination and a named qualified investigator, versioned consent, compensation/recruitment plan, age/capacity safeguards, model provider/data-flow review, encrypted local storage, identity mapping held separately, access roles, withdrawal and retention rules, and an incident contact. No automatic screen recording, private chat capture, keystroke logging, personal GitHub scraping or managerial assessment.

Use only investigator-created pseudonymous IDs in analytic sheets. Avoid full model chat transcripts by default; collect only preapproved event counts and the minimum task response needed for blinded scoring. Never commit participant artifacts or real consent documents to this public repository.

## 7. Stop, revise and authorize

Stop and amend if test leakage, invalid blinding, unsafe data handling, compromised consent, an unqualified investigator, an unreviewed provider change, uncontrolled task-form imbalance, an adverse event or withdrawal process failure arises. A trained human lead makes all live-session decisions.

Proceed from this documentation to a pilot **only** after: research/ethics determinations, task and scoring lock, data/consent plan, model review if AI used, blinded-rating rehearsal, dry-run checklist, and decision owner sign-off. No software implementation is authorized by passing those items; a distinct build-versus-manual decision is required afterward.

### Open decisions

- Named investigator, ethics jurisdiction and written determination
- Use case and beneficiary; precise go/no-go decision
- Task corpus, alternate-form equivalence and treatment fidelity review
- Baseline measure and length of practice/follow-up sessions
- Model/provider, local/hosted handling, prompt policy and participant disclosures
- Scoring weights, agreement threshold and reconciliation method
- Preregistered margins, sample-size simulation, multiplicity and missingness plan
- Data retention period, withdrawal mechanics and accountable contact