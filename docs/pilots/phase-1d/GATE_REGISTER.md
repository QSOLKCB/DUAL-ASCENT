# EXP-002 Phase 1D — Evidence gate register

**As of:** 2026-11-09. **Controlling decision:** **REVISE; NO BUILD AUTHORIZED**.  
**Provenance:** previous [MV gates](../manual-validation-002/DECISION_GATE.md) and [Phase 1C tests](../calibration-003/RESULTS.md).

This register differentiates **preparing a task**, **actually doing it**, and **obtaining an independent decision**. A documentation PR can complete preparation only; it cannot supply real reviewer judgements or operator stopwatch records.

| Gate | Required external evidence | Owner | Status |
|---|---|---|---|
| 1D-01: public synthetic calibration | Published eight-case technical matrix and reproducible tests, with environment limits | Engineering | **EXECUTED (Phase 1C)** |
| 1D-02: two real independent review sheets | Two distinct persons' independently locked *private* first-pass C/R/E sheets and missingness; confirm prior exposure to oracle | Independent reviewers | **NOT_RUN** |
| 1D-03: rubric amendment | Qualified review of [CR-001](RUBRIC_CHANGE_PROPOSAL.md), thresholds, mistake handling and noninferiority/score interpretation | Measurement reviewer | **BLOCKED** |
| 1D-04: actual stopwatch comparison | Human-operated manual **paper vs offline CSV** source readings, corrections, error observations, method order and limitations | Human operator | **NOT_RUN** |
| 1D-05: purpose and software necessity | Named beneficiary and measured decision utility versus manual method; explicit BUILD/NO BUILD | Research lead/owner | **NOT_RUN** |
| 1D-06: treatment parity and withheld forms | Approved H/A/S policies, assistance settings, task equivalence and separation of private held-out assessments | Research methodology lead | **BLOCKED** |
| 1D-07: ethics, consent, data flow | Written jurisdiction-appropriate determination, data inventory and retention/withdrawal/incident plan | Qualified ethics/governance authority | **BLOCKED** |
| 1D-08: published non-identifying review summary | A human-approved synopsis with test denominators, unresolved differences, non-claims and open gates | Maintainer + reviewers | **NOT_RUN** |

**No implied milestone pass:** `EXECUTED` in 1D-01 means only the code-behaviour tests were run. It does not reduce the other requirements.

## Stop / go decisions

- **REVISE**: missing external signatures, study parity, evidence of timing, or validated scoring.
- **GO for synthetic-method calibration**: gates 1D-02 through 1D-04 are resolved: two independent reviewers can apply the approved/revised rubric under predeclared agreement and adjudication rules, and the timed operator exercise has actual evidence. Any blocking scoring ambiguity remains **REVISE** even if the sheets and timing exercise were completed. This does not mean **GO for live study**.
- **GO for human participant study**: separate ethics determination, consent, qualified lead, pre-registration, version-locked instruments and appropriate safeguards are evidenced; subject to an explicit external authorization.
- **BUILD / NO BUILD (separate)**: a new application remains unauthorized unless the manual experiment reveals meaningful recurring problems demonstrably solved by a bounded, local, privacy-preserving instrument.
- **STOP**: absent a real beneficiary, unacceptable risk, non-reproducible tasks or unnecessary infrastructure.

## Publication rules

The default is **private local evidence**, not public GitHub datasets. Do not commit completed reviewer sheets, personal identity, consent, private task forms, raw model chats or work timings identifying people. Only a reviewed, aggregate/non-identifying summary may be proposed to GitHub. The summary must include `NOT_RUN` for absent work, not guessed or model-generated results.

Use [PUBLIC_SUMMARY_TEMPLATE.md](PUBLIC_SUMMARY_TEMPLATE.md) to collect a non-identifying report **after** actual work. No row in this gate register is automatically converted to PASS by a PR merge.

**EXP-005:** remains provisional and outside Phase 1D.
