# DUAL-ASCENT Experiment Protocols

## Governing protocol rules

Each experiment is a **human-subject research protocol**, not a runnable software demonstration. The proposed implementation can validate synthetic records, generate receipts, and create static reports. It cannot obtain informed consent, establish ethics approval, make participants blind, ensure valid randomization, or demonstrate any human effect.

Before recruitment, preregister: hypotheses; confirmatory contrasts; smallest effect of interest (SESOI); inclusion/exclusion; allocation; task corpus; scoring rubrics; model/provider/version/configuration; prompt templates; sample-size simulation; missing-data handling; multiplicity adjustment; code release date; and stopping rules. Record all deviations in a protocol amendment ledger. Obtain applicable ethics/IRB review, consent, data management approval, and jurisdictional advice before collecting participant data.

> A workflow is an improvement only if it meets a predeclared task-quality threshold **and** does not violate its predeclared human safeguard. No composite “human intelligence” score is permitted.

## EXP-001 — Goal-First vs Tool-First

### Research question and hypotheses

**Question.** Does goal-before-capability framing improve useful task outcomes and preserve agency relative to capability-before-goal framing, while retaining declared exploration as a legitimate alternative?

| Element | Specification |
|---|---|
| Confirmatory H1 | Goal-first produces higher blind-rated useful completion than tool-first. |
| Confirmatory H2 | Goal-first is not worse than tool-first by more than the agency SESOI on delayed goal–artifact traceability. |
| Exploratory H3 | Declared exploration differs from undeclared tool-first work, demonstrating whether explicit exploratory purpose rather than tool exposure is the relevant distinction. |
| Falsification | If tool-first is non-inferior/superior on useful completion and no worse on safeguard outcomes with CIs excluding a meaningful goal-first advantage, H1/H2 are not supported. If declared exploration equals tool-first, the planned distinction lacks support. |

### Design

Use a four-arm randomized, between-participant study: **A** goal-first, **B** declared exploration, **C** tool-first, **D** no-new-tool/manual-planning comparison. Block randomization uses prior domain expertise and prior AI-use frequency strata; allocation sequence is generated independently and concealed until enrollment. Sample adults with declared domain competence appropriate to the task; do not recruit people with a relationship of dependency to the investigator.

Every participant receives one matched task brief in a rotation-balanced set, such as specifying a small internal workflow or engineering artifact for a defined beneficiary. In A, the participant writes beneficiary, outcome, acceptance test, constraints, and “build / do not build” choice before viewing capability cards. In B, the participant declares an exploratory question, time/cost ceiling, discovery criterion, and stop/no-build option before viewing cards. In C, the participant first sees the identical capability cards and then proposes a task. In D, the participant receives task materials but no newly introduced tool. A human researcher must not imply that building is expected.

### Variables, outcomes, and controls

| Category | Predefined measure |
|---|---|
| Independent variable | Assigned workflow order/arm. |
| Primary dependent variable | Blind 0–4 useful-completion rubric: beneficiary fit, verifiable acceptance-test satisfaction, constraint compliance, artifact quality. Two or more raters score de-identified artifacts. |
| Co-primary safeguard | Delayed (7–14 day) goal–artifact traceability rubric plus participant agency/choice items. |
| Secondary outcomes | No-build choice; task time; later use/adoption; tool switches; abandoned artifacts; satisfaction; voluntarily reported meaning. |
| Controls | Same task difficulty bands, capability-card content, time budget, instruction length, model access/configuration, and rater rubric. |
| Exclusions | Predeclared incomplete consent, technical failure precluding task, and duplicate enrollment. Do not exclude “unproductive” work. |

Potential confounders include expertise, pre-existing projects, tool familiarity, demand characteristics, different interpretations of “useful,” and rater inference of condition. Address these through stratification, standardized briefs, condition-masked artifacts, rater agreement checks, and reporting of all arm-level missingness. The model’s output and any submitted artifact may be nondeterministic; record versions and prompts, but do not claim full replayability.

### Analysis and sample size

Analyze intention-to-treat. For continuous rubric aggregates, use a mixed model with condition fixed effects and predeclared expertise/task/rater terms; for ordinal scores, use a cumulative-link mixed model. Report arm means, standardized contrasts, 95% CIs, raw distributions, ICC/alpha for rater agreement, and missingness. Apply a preregistered multiplicity method to the primary contrast family.

Run a pilot to estimate score variance and rater ICC, then simulate the definitive design including four arms, rater nesting, blocks, and attrition. A simple independent-groups reference of about **130 analyzable participants per arm** detects *d*=0.35 at 80% two-sided power, but it is **not** a sufficient final calculation for the proposed mixed design. Inflate for 15% delayed-follow-up attrition and replace with protocol-specific simulation.

## EXP-002 — Independent Skill Transfer

### Research question and hypotheses

**Question.** Which assistance style, if any, supports later unaided application of a newly learned engineering skill?

| Element | Specification |
|---|---|
| Confirmatory H1 | Scaffolded AI (hints, explanation, Socratic questions; no final solution) has higher delayed held-out transfer than answer-generating AI. |
| Confirmatory H2 | Scaffolded AI is not inferior to human-only practice beyond the delayed-transfer SESOI. |
| Secondary H3 | Answer-generating AI may improve task-phase completion while reducing delayed transfer compared with other arms. |
| Falsification | Any claim that scaffolding preserves transfer fails if its delayed score is meaningfully below human-only or not meaningfully above answer generation. Any universal harm claim fails if CIs rule out meaningful loss in both AI arms. |

### Design

Recruit adults learning an unfamiliar but safely sandboxed programming library or engineering procedure. Randomize, using blocked allocation by baseline test and language experience, to: **human-only**, **answer-generating AI**, or **scaffolded AI**. Tasks are parallel forms with a fixed environment and a new concept not previously practiced by participants. The answer arm may request solutions; the scaffold arm can ask questions but the assistant is constrained by a transparent response policy to hints/explanations and error diagnosis without full task solutions. A human-only arm receives standard documentation.

Measure baseline knowledge before allocation, task-phase outcome, immediate unaided explanation/debugging, and delayed **7–14 day** held-out transfer without AI. Counterbalance task form/order and blind scoring. Prohibit AI within the test environment only for the short study test; do not instruct participants to abstain from ordinary tools outside it. Record help requests in a minimized event log, not private conversations by default.

### Variables, metrics, and analysis

| Category | Specification |
|---|---|
| Independent variable | Assistance style. |
| Primary outcome | Delayed unassisted held-out transfer score, blind-scored for correctness, robustness, and explanation. |
| Co-primary task outcome | Task-phase correctness/quality and time, reported separately. |
| Secondary outcomes | Immediate test, debugging, code reading, error detection, confidence calibration, help-request profile, optional usability. |
| Analysis | ANCOVA/mixed model: delayed transfer ~ condition + baseline + task form + experience block; robust SEs. Report adjusted means, *d*, 95% CIs, and predeclared contrasts. |

Key confounders are prior expertise, resource access, unequal assistant response quality, test leakage, peer collaboration, attrition, and confidence effects. Use a locked container/task environment, consistent model settings, fixed prompt policy, separate sessions, and a post-test tool-use check that is not punitive. Treat self-reported confidence as distinct from performance.

Power must use delayed-test pilot variance, baseline–outcome correlation, multiple contrasts, and attrition. As a crude two-arm benchmark, approximately **130 analyzable people per arm** is needed for *d*=0.35 at 80% power; the three-arm repeated-measure design needs a larger simulated target.

## EXP-003 — Creative Identity and Authorship

### Research question and hypotheses

**Question.** How do different AI collaboration modes affect individual creative quality, corpus diversity, recognizable voice, perceived authorship, and meaning?

| Element | Specification |
|---|---|
| H1 | AI-assisted revision may improve blind individual-quality ratings over human-only production. |
| H2 | AI-generated-first work may reduce corpus-level diversity and voice distinctiveness versus human-only work. |
| H3 | Authorship and meaning effects are heterogeneous; neither universal harm nor universal benefit is assumed. |
| Falsification | A homogenization claim fails if preregistered diversity/voice outcomes show no meaningful decline. A universal individual-benefit/harm claim fails if credible moderation or distributions show material opposing effects. |

### Design and ethics

Use a within-participant, counterbalanced crossover with matched prompts, separated scheduling, and condition order randomized by Latin square. Conditions are: **human-only**; **AI-assisted revision** of participant’s own first draft; **AI-generated-first** followed by participant revision. Collect an optional baseline work created expressly for the study; do not request private journals, family stories, client material, unpublished manuscripts, or images by default.

Use at least two independent blind raters per artifact, condition-masked until first ratings are complete. Participants separately rate meaning, contribution, ownership, enjoyment, and disclosure comfort; these are not treated as objective authorship facts. Publish an authorship/disclosure plan and allow participants to withdraw their creative work before public sharing as permitted by consent and retention design.

### Outcomes and analysis

| Outcome family | Measurement | Interpretation limit |
|---|---|---|
| Individual quality | Blind novelty/usefulness/craft rubric | Rater judgment, not intrinsic artistic value. |
| Voice | Rater comparison to consented participant baseline and a preregistered feature battery | Avoid using a single embedding measure as proof of identity. |
| Population diversity | Pairwise corpus similarity / permutation contrast plus blind “distinctiveness” ratings | Diversity is a distributional property, not moral quality. |
| Subjective authorship | Participant items on ownership, meaning, contribution, and willingness to claim/disclose | Subjective and culturally contingent. |

Fit mixed-effects models with participant and rater random intercepts; include prompt and order effects; run a preregistered permutation test for corpus diversity. Report each condition’s distribution and rater agreement. If agreement is below a preregistered threshold, label the rating outcome invalid/indeterminate rather than force a conclusion. Determine sample size by simulation using pilot within-person correlation, rater ICC, and desired precision; no universal fixed *N* is defensible.

## EXP-004 — Prospective Intention Prediction

### Research question and hypotheses

**Question.** Can an assistant predict a collaborator’s independently declared next engineering action, before that action is stated, better than transparent baselines?

| Element | Specification |
|---|---|
| H1 | The assistant has higher blinded top-1 exact-match accuracy than both continuation and frequency-matched baselines. |
| H2 | The assistant has better Brier score/calibration than both baselines. |
| Falsification | No claim survives if superiority is absent on either predeclared primary benchmark, if post-intention leakage occurs, or if adjudicators cannot score reliably. |

### Design

This is a prospective **prediction benchmark**, not an experiment demonstrating mental-state access. During distinct engineering sessions, an assistant receives only an allowlisted task-context snapshot. Before the participant records their next intention, the system produces a structured prediction: ordered candidate actions, probabilities totaling 1, model/version, rubric ID, timestamp, and 128-bit-or-longer random salt. It stores `SHA-256(canonical_json(prediction_without_commitment))`. The participant then records one next intended action without seeing the prediction. Only then is the prediction and salt revealed.

Action labels use a locked taxonomy, for example: inspect failing test; run test; edit implementation; edit specification; seek documentation; create fixture; ask collaborator; stop/defer; other-prespecified. Two masked adjudicators score exact, partial, or incorrect matches against written definitions. Baselines are fixed before data collection: last-action continuation and participant/task-stratum empirical-frequency baseline. No model sees the participant’s intention text before commitment.

### Metrics, controls, and analysis

| Category | Specification |
|---|---|
| Primary metrics | Top-1 exact-match accuracy; multiclass Brier score. |
| Secondary | Top-*k* accuracy, macro-F1, calibration slope/intercept, coverage/abstention, partial-match rate. |
| Unit | Prediction episode; participant clustering retained. |
| Controls | Identical allowed context for model/baselines; fixed taxonomy; precommitment; masked adjudication; leakage audit. |
| Analysis | Participant-cluster bootstrap CIs; paired permutation/sign tests vs each baseline; confusion matrix and calibration plot. |

Pilot **10–20 participants and 100–200 episodes** to quantify action-class imbalance, missingness, and adjudicator agreement, then simulate required episodes for a practical effect such as a 10-point exact-match lift above the strongest baseline. This is a planning example, not a powered claim. A receipt establishes that a disclosed record matches a prior hash; it does not prove that a participant’s self-report was private, true, or unchanged elsewhere.

## Shared ethical and reporting requirements

The study team must state compensation, recruitment channel, inclusion/exclusion, demographic collection rationale, participant burden, model provider/data use, data location, retention, withdrawal, adverse-event contact, conflicts, and all deviations. De-identify scoring packets, avoid uploading raw private content, never use clinical language or risk labels, and do not use study data for employment, grading, surveillance, ranking, or product targeting. Report null, mixed, and adverse outcomes prominently.

## References

[1]: https://doi.org/10.1073/pnas.2422633122 "Bastani et al. (2025), guarded versus unguarded AI tutoring"
[2]: https://arxiv.org/abs/2601.20245 "Shen & Tamkin (2026), coding skill formation preprint"
[3]: https://doi.org/10.1126/sciadv.adn5290 "Doshi & Hauser (2024), individual creativity and collective diversity"
[4]: https://doi.org/10.1136/amiajnl-2011-000089 "Goddard et al. (2012), automation bias review"
