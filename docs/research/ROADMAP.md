# DUAL-ASCENT Roadmap and Release Gates

> **Status:** Provisional research-roadmap staging draft, 2026-11-09. Based on Monica's revision-two roadmap, with **EXP-005 — The Orchestrator Paradox** added as a candidate study. Monica's third-pass research and independent review remain pending. This branch is not approval to run human-participant experiments or ship an implementation.

## Governing decision

**REVISE — documentation and manual pilot first.** DUAL-ASCENT investigates whether AI-assisted workflows improve useful outcomes while preserving human understanding, agency, and independent skill. A useful study is not established by building software, opening more agent tabs, or increasing output volume.

Before any software implementation, identify the human decision to be improved, its beneficiary, a disconfirming result, and why a manual protocol would be inadequate. No claims about effects on human intelligence, mental health, or creative identity are warranted by synthetic-code tests.

## Phases and release gates

| Phase | Deliverable | Exit gate | Stop/defer trigger |
|---|---|---|---|
| 0. Documentation-only review | Evidence register, protocols, decision record, roadmap, reviewable docs PR after Monica rev3. | A named decision, beneficiary, falsification rule, and manual-protocol comparison. | The project merely celebrates tool use without informing a decision. |
| 1. Study readiness | Applicable ethics/IRB determination, consent, privacy and retention rules, preregistration drafts, blind scoring rubrics. | Written authorization/determination and reviewed measurement plan. | Participant safeguards or valid measurement cannot be established. |
| 2. Synthetic MVP (conditional) | Local contracts, deterministic receipts, fixtures, and static offline reports. | Tests and privacy/integrity gates pass; software has proven incremental utility. | A paper/notebook/spreadsheet is adequate; surveillance or telemetry would be needed. |
| 3. Consented feasibility pilot | Small approved manual or minimal-tool pilot of one prioritized protocol. | Acceptable burden, reliable scoring, intact safeguards, useful decisions. | Reliability, participant protection, or decision value is inadequate. |
| 4. Confirmatory research (conditional) | Preregistered, independently evaluated experiments with null and negative outcomes retained. | Valid comparison, uncertainty estimates, and reproducible analysis. | No practicable advantage or unacceptable trade-off. |
| 5. Conditional v0.1.0 research-kit release | Offline protocol-integrity kit, not a diagnosis or employee monitoring tool. | Evidence boundaries, license, security/privacy and technical gates met. | Synthetic test success is misrepresented as human benefit. |

## Experiment prioritization

Do not run experiments in parallel merely because they are listed. The original revision-two priorities remain intact until an independently reviewed protocol changes them.

| Priority | Experiment | Current focus | Gate |
|---:|---|---|---|
| 1 | **EXP-002 — Independent Skill Transfer** | Assistance style versus delayed unaided performance. | Ethical held-out assessment and reliable scoring. |
| 2 | **EXP-001 — Goal-First vs Tool-First** | Human-defined goals, deliberate exploration and tool-driven projects. | Real beneficiary and blind usefulness rubric. |
| 3 | **EXP-003 — Creative Identity and Authorship** | Distinctiveness, creative meaning, and diversity without a single creativity score. | Consent, privacy and rater reliability. |
| 4 | **EXP-004 — Prospective Intention Prediction** | Precommitted next-action predictions versus baselines. | Leakage-resistant commitments and agreed action taxonomy. |
| **Candidate; unranked** | **EXP-005 — The Orchestrator Paradox** | Agent concurrency versus human review and control. | Literature review, valid workload control, ethical feasibility and reviewer-capacity measures. |

## EXP-005 — The Orchestrator Paradox

**Research question:** At what level of concurrent AI-agent work, if any, does additional parallelism cease improving *verified* human-directed outcomes, or begin impairing a human operator's ability to understand, review, and control the work?

This is a **proposed, falsifiable research question**, not an observed effect. A screenshot showing many browser tabs, anecdotal reports of high productivity, and active GitHub PR counts are not evidence of a generalizable overload threshold.

### Candidate hypotheses and alternatives

- **H1 (diminishing returns):** Verified task completions per unit of human review time increase initially but eventually plateau or decline as concurrent workstreams increase.
- **H2 (review trade-off):** At higher concurrency, independently adjudicated defect-detection sensitivity or retained task understanding decreases, even when raw output increases.
- **H3 (moderation):** Structured queues, written handoffs, explicit acceptance tests, and task grouping change the concurrency/outcome relationship.
- **Null/alternative:** No material overload occurs within tested conditions; skilled orchestration or task characteristics may explain apparent effects. The optimum may differ across people and domains.

A universal numeric threshold must **not** be announced from a single operator, pilot, or unpowered comparison.

### Feasibility protocol — design only

1. **Manual first:** Start with a prospective, opt-in manual work log and fixed review rubric. Do not introduce surveillance software.
2. **Operationalize concurrency:** Number of *simultaneously active independent AI workstreams*, not the number of browser tabs or models installed. Explore candidate conditions **1, 2, 4 and 8**, with ability to reduce levels for feasibility and safety.
3. **Control the workload:** Match task type, complexity, acceptance criteria, and review artifacts across conditions. Where possible, use pre-generated, version-pinned agent submissions so generation speed is not mistaken for human review capacity. Keep total available work and study time comparable.
4. **Counterbalance:** Randomize or counterbalance condition order and task assignments; evaluate learning, fatigue, order, model changes, and prior familiarity as confounders. A single-operator N-of-1 feasibility log cannot establish population effects.
5. **Blind adjudication:** Have separate reviewers determine ground-truth task quality and seeded/known defects without knowing the concurrency condition. Preserve false-positive as well as missed-defect counts.
6. **Independent understanding:** Use short unassisted explanations or delayed task-transfer assessments defined before the session. Distinguish successful delegation from inability to understand a critical decision.
7. **Stopping and burden:** Predeclare breaks and stopping conditions, respect voluntary withdrawal, and avoid collecting unrelated communications, private prompts, personal information, or device telemetry.

### Candidate outcome register

| Outcome | Operational measure | Evidence boundary |
|---|---|---|
| Verified throughput | Independently accepted tasks per scheduled human review hour | Not equal to raw agent output, PR count, or number of open tabs. |
| Review accuracy | Sensitivity and false-positive rate against known/adjudicated defects | Requires a controlled defect set; do not infer accuracy from CI green alone. |
| Oversight failures | Missed critical issues weighted or categorized by predeclared severity | Severity rules must be fixed before scoring. |
| Context switching | Opt-in manual count/time spent resuming task context; optional self-reported burden | Not a clinical attention or psychological diagnostic metric. |
| Retained understanding | Blinded rubric for unassisted explanation and/or delayed transfer | Separate immediate recall from independent skill retention. |
| Human agency | Documented ability to reject, defer, cancel, or redirect an agent's proposed work | Qualitative governance outcome; not a productivity rank. |

Do **not** combine these into a single 'human intelligence', 'AI dependency' or team-leader score. Report separate dimensions and uncertainty intervals; a productivity improvement cannot compensate for a preregistered critical safety/understanding failure.

### Research gates for EXP-005

- **G5-A — Construct validity:** Specify what counts as an agent/workstream, verified completion, critical defect, and independent understanding; review with independent researchers.
- **G5-B — Literature and alternatives:** Ask Monica to examine task-switching, cognitive load, automation bias, coordination overhead and human supervisory-control research, including evidence against any predicted saturation.
- **G5-C — Manual feasibility:** Test a simple paper/spreadsheet protocol with synthetic tasks first; establish whether workload matching, blinded scoring, and non-invasive measurement are possible.
- **G5-D — Preregistration and participant protection:** Obtain applicable review/consent and prespecify outcome contrasts, sample-size rationale, exclusion, missingness, order effects and stop rules before any live human study.
- **G5-E — Build decision:** Software is justified only if validated manual methods cannot reproducibly support the named decision with lower burden. Otherwise retain the protocol as documentation.

### Explicit non-goals

No automatic observation of employee activity, scraping browser tabs, covert time tracking, model-personality diagnoses, addiction/psychosis labels, performance surveillance, agent-count leaderboard, or unsupported 'ideal number of agents' recommendation.

### Pending Monica revision-three review

Request an independent EXP-005 literature and methods appendix that challenges these hypotheses; proposes a feasible, ethically reviewable controlled design; evaluates whether four concurrency levels are appropriate; and explicitly recommends **GO / REVISE / STOP** for this candidate independently of the larger DUAL-ASCENT implementation decision. Reconcile this draft with the authoritative rev3 research roadmap before any documentation PR or merge.

## Existing release criteria retained

- **G0 — Documentation integrity:** Empirical assertions map to an evidence register. Proposed methods are labeled proposals.
- **G1 — Decision utility:** A real beneficiary and falsifiable use decision exist; a manual alternative is compared.
- **G2 — Participant protection:** Consent, ethics determination, withdrawals, retention and data flow are reviewed before collecting any study data.
- **G3 — Technical integrity:** Strict schemas, tamper tests, output escaping, no-network reports and CI pass if software is justified.
- **G4 — Measurement feasibility:** Human evaluation has reliable rubrics, low burden and no unresolved privacy harms.
- **G5 — Evidence discipline:** Null/mixed findings and safeguard failures remain visible and are not buried in a combined score.

**Cancellation rule:** Stop implementation when the study cannot alter a concrete human decision; the manual workflow is better; methodological validity or ethical safeguards fail; or maintaining the project becomes an exercise in accumulating tooling instead of learning.

> **The Human Is The Upgrade. The AI Is The Instrument.**
