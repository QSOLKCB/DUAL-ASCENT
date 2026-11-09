# EXP-002 — Timed Human-Operated Manual Method Exercise

**Status: NOT RUN.** This document specifies a genuinely **human-operated** synthetic workflow. It is not an automatic benchmark or consented human-learning study; timings must be made by a person using an actual stopwatch or manual clock. Do not report agent generation latency as a measurement of human effort.

## Question

Can a human operator prepare, blind and audit five **fictional** experimental records accurately with only a paper ledger or an offline CSV/spreadsheet, and how much time/error does that take?

This is a tiny usability rehearsal. It cannot show statistical superiority of tools or establish that implementation is warranted. It uses the already published [five synthetic rows](../tabletop-001/README.md) solely as demonstration material; no real study IDs or participant data.

## Set-up and alternative conditions

**Method P — paper:** Blank paper or printed blank templates, pen, stopwatch. No automatic field validation, spreadsheet formulas or assistant.

**Method C — offline CSV/spreadsheet:** Locally saved CSV templates edited manually in a plain text editor or offline spreadsheet, using built-in editing/formatting only. No model calls, background telemetry, scripts, macros, or auto-repair.

Record the editor/spreadsheet version, hardware, display settings, person's familiarity with the method and data entry mistakes. A *single* operator may perform both methods; method order should be reversed in an independent repetition to limit practice effects. Learning/order effects mean a simple P-vs-C time difference is **not causal evidence**.

### Standard operator task card (both methods)

1. **Start clock** when opening the fabricated source allocation table, not when setting up equipment.
2. Copy five `SYN-` records into a local coordinator ledger while retaining the hypothetical H/A/S arms *in this coordinator-only ledger*.
3. Produce a separate rater-view worksheet with only packet IDs, visit/form, outcome status and fictional artifact references. Inspect **every header and row** for accidental arm or coordinator-ID inclusion. If leakage is found, note and correct it rather than deleting evidence of an error.
4. Record a submitted packet and an absent delayed packet **without** inventing a score for the latter.
5. Write two *fabricated* independent rating examples for the submitted packet **as illustrative data only**. Do not pretend two people scored anything. If independent reviewer sheets exist from a separate human calibration, keep them distinct.
6. Mark fictional withdrawal, unblinding and scaffold-policy violations in the deviation ledger without inventing consent approval, technical deletion, or successful guardrail enforcement.
7. Produce a brief checklist of expected data fields and manual error counts; verify missing scores remain blank and that the arm does not enter a rater packet.
8. **Stop clock** only when all records, checks and corrections have been completed. Record elapsed seconds, corrections, unresolved errors, and optional perceived burden (if operator chooses).
9. Reset to the same fictional starting records before performing the second method. Do not rely on copied answers or silently use an automated conversion.
10. Compare results by method and state explicitly whether a spreadsheet already suffices; **do not declare a software GO solely because one method is faster**.

**Critical fail conditions:** A rater sheet reveals a fictional treatment arm; a missing response is scored 0 without a preregistered rule; a withdrawal is treated as completed deletion; a fabricated rater is described as an actual independent reviewer; a result is presented as a real human-learning outcome. Record each as an error, not as a passed task.

## Timed worksheet (blank, do not commit filled copies)

Use a **local** copy of [OPERATOR_LOG_TEMPLATE.csv](OPERATOR_LOG_TEMPLATE.csv). The operator fills `elapsed_seconds` from the actual stopwatch and `error_count`, `correction_count` and `unresolved_count` from manually observed events.

| Field | Example encoding (NOT an observation) |
|---|---|
| `trial_id` | `SYN-TRIAL-01` |
| `method` | `PAPER` or `CSV` |
| `order_index` | 1 or 2 |
| `elapsed_seconds` | **blank until actually timed** |
| `error_count` | **blank until observed** |
| `correction_count` | **blank until observed** |
| `unresolved_count` | **blank until observed** |
| `arm_leak_detected` | **blank until checked** |
| `missing_score_fabricated` | **blank until checked** |
| `protocol_version` | `EXP-002-MV-002` |

### Review/report contract

Submit a written review with number of operators, number of repetitions, method order, elapsed times, errors/corrections, residual problems, changes to instructions, and whether the *manual workflow* can answer the beneficiary's decision. Report uncertainty and any invalid/missing trials. If a human operator has not done the exercise, record **NOT_RUN**.

Do not upload a real person's identity, local path, private research artifacts, or identifying time log to GitHub. A redacted abstract of observed difficulties may be proposed for a future PR with the human operator's explicit review.

## Build decision

No application's use is being compared; this is **paper versus manual CSV**, not software MVP versus no software. The results can identify likely requirements, but are **insufficient alone** to authorize the rev3 implementation. An implementation GO requires an additional recorded use decision and reproducibility/safety advantage over this lowest-cost procedure. See [DECISION_GATE.md](DECISION_GATE.md).
