# EXP-002 Phase 1D — human-operated stopwatch exercise

**Status: NOT RUN.** These instructions operationalize [Phase 1B T-08](../manual-validation-002/TIMED_OPERATOR_PROTOCOL.md) using **only fictional records**. The operator must do the work and record their own clock readings. An AI agent's document-generation or execution time is **not** a human workload measurement.

## Scope and records

**Source:** the five `SYN-` cases from [tabletop-001](../tabletop-001/README.md). Source records are intentionally fabricated and public. Use a **private local copy** of the [operator CSV log template](../manual-validation-002/OPERATOR_LOG_TEMPLATE.csv). Avoid committing the filled log, identifying metadata or unrelated personal files.

### Method P: paper only

Print or copy the same fictional task card and blank ledger onto paper. Using a stopwatch, a human transcribes five cases, separates a coordinator-only arm key from the rater-visible packet, notes missing follow-up and withdrawal without inventing data, and manually records errors and corrections.

### Method C: offline CSV/spreadsheet

Repeat **the identical task** using local editable CSV or offline spreadsheet, with no automation, model, macro, formula-based repair, external service or hidden validator. Record the editor/runtime and operator's pre-existing familiarity, but not their identity in public. Make both coordinator-only and rater-view sheets, check missingness and deviations, and manually count errors.

## Timing and comparability

1. Randomly choose an initial method order **before** the first trial; record it. For a later independent repetition, invert the order where feasible. A single crossover is strongly vulnerable to practice and fatigue.
2. Set up environment **before** the measurement. The timer begins when the operator opens the fictional case table and ends after manual validation/corrections for that method. Don't subtract debugging or rework time.
3. Note start/end clock readings privately. Record actual `elapsed_seconds`, `error_count`, `correction_count`, `unresolved_count`, `arm_leak_detected` and `missing_score_fabricated`. Do not prefill or infer any result.
4. Reset materials to the same fictional source before the second method. Record any copy/paste, hints, extra tools, interruptions or changed task conditions as **protocol deviations**.
5. If an operator is uncomfortable, can no longer comply or declines, stop and record that the exercise was discontinued, not zero-duration or success.
6. Report the raw paired observations and limitations, **not a percentage productivity gain** from a single run. If nothing is timed, preserve **NOT_RUN**.

## Predeclared correctness checks

| Condition | What a successful operator record shows |
|---|---|
| Arm concealment | The rater-view file omits assignment `H/A/S`, source study IDs and equivalent labels |
| Missingness | Missing `PKT-002` remains without C/R/E scores; no invented zero |
| Withdrawal | `PKT-003` is flagged for approved disposition, **not** marked deleted |
| Leakage | The fictional policy and unblinding records remain deviations, not silently cleared |
| Independence | Two *invented* ratings are explicitly labelled examples, not results of two independent human raters |
| Retention | The coordinator-only mapping is never included in the rater packet |

An unresolved problem is a measured failure, not permission to fabricate a pass. The all-public sample exercises **field omission**, not real access control.

## Decision after timing

A human lead documents whether paper or CSV was adequate for the current fictional use case and whether repeated manual workload is a reason to consider a minimal tool. This is not a comparison with Monica's proposed application and **cannot by itself authorize software**. Without real human observations and a decision owner, gates MV-01 and MV-06 stay NOT_RUN.

The next step is to record a **sanitized, owner-reviewed summary** using [PUBLIC_SUMMARY_TEMPLATE.md](PUBLIC_SUMMARY_TEMPLATE.md), with no respondent identity or private artifacts.
