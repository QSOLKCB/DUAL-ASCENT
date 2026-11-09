# EXP-002 — Task Construction and Assistance Policies

**Version:** `EXP-002-PREP-v0.1` — **synthetic proposal, NOT a locked study instrument**. This page illustrates a manual protocol. Do not use the toy forms as an approved study, claim equivalent difficulty, or publish actual held-out answers before a live test.

## Construct: learn a bounded skill, then use it independently

**Candidate skill:** safely reading tabular records using Python's standard-library `csv.DictReader`, filtering rows according to an explicit domain rule, accepting only unambiguous non-negative integer quantities, and explaining error-handling choices. The unfamiliar-library assumption must be checked at baseline; experienced Python programmers may not be eligible for this *particular* task battery.

A reviewer should independently assess whether the task requires meaningful learning rather than simple copying or recalling a programming idiom. If tasks are too easy, too similar, or not equivalent, **revise before recruitment**.

### Form P — practice example (all arms)

A user supplies CSV columns `record_id,phase,minutes`. Return the count and sum of rows with `phase` exactly `done` and `minutes` a base-10 non-negative integer. Exclude invalid quantities and rows with another phase; do not interpret arbitrary Python expressions.

| record_id | phase | minutes | Included? |
|---|---|---:|---|
| r1 | done | 10 | Yes |
| r2 | open | 5 | No |
| r3 | done | 8 | Yes |
| r4 | done | n/a | No |
| r5 | done | -2 | No |
| r6 | done | 0 | Yes |

**Synthetic expected result:** count 3, sum 18. An empty file produces count 0 and sum 0; a malformed header must yield a controlled failure rather than an invented result.

### Form I — immediate unaided illustration

Same foundational skill, different fields and values: `unit,state,cost`; include `state` exactly `passed` and valid non-negative base-10 integer `cost`. Rows: `(u1,passed,3)`, `(u2,failed,50)`, `(u3,passed,2)`, `(u4,passed,NA)`, `(u5,passed,-1)`.

**Synthetic expected result:** count 2, sum 5. Ask for a short explanation of one malformed-value handling choice.

### Form D — delayed unaided illustration

Another field mapping: `artifact,result,bytes`; include `result` exactly `verified` and valid non-negative base-10 integer `bytes`. Rows: `(a1,verified,11)`, `(a2,skipped,7)`, `(a3,verified,9)`, `(a4,verified,?)`, `(a5,verified,0)`.

**Synthetic expected result:** count 3, sum 20. Also test an empty file and a missing required column without supplying the participant with prior answers or a completed function.

### Why these are not final study materials

These three examples intentionally share a structure and disclose their oracle results **in public**. They are suitable for discussing measurement, creating an illustrative rater packet, and checking record formats. They are **not** defensible as unseen transfer items: they are transparent, possibly too similar, and their answers can be memorized. The approved study must use independently constructed, private-at-test-time parallel forms, new hold-out questions and a content-leakage review. Counterbalance and test alternative forms.

## Standardized practice environment (proposal)

- One pinned Python version, local editor/runtime and local documentation snapshot; no external I/O for task fixtures.
- All arms receive identical task statements, error/empty-input policy, time allowance and access to standard library docs.
- Only the assigned arm's AI access differs. Specify the same model/version, generation settings, token/help allowance and provider data policy for A and S.
- The facilitator does not coach one arm more than another. Provide a script for neutral clarification that does not reveal solutions.
- Freeze model prompts and rubric before use. Check for assistant policy leakage on *synthetic* materials and document failures.

## Assistance policy A — answer-generating (proposed)

The assistant may produce complete solutions, correct code, explain its reasoning, rewrite an answer and diagnose errors if asked within the practice task's bounded scope. It must not receive any later held-out item, participant identity, private project, or hidden grading rubric.

**Template (illustrative):** "You are helping with the supplied learning task. You may answer directly, including a full worked solution. Stay within the task materials and do not claim knowledge of later assessments."

## Assistance policy S — scaffolded (proposed)

The assistant may provide documentation pointers, conceptual hints, leading questions, partial examples unrelated to the exact task data, and error-diagnosis guidance. It **must not** provide a full task solution, ready-to-submit function or complete code path for the current practice question.

**Template (illustrative):** "You are assisting a learner with the supplied task. Ask guiding questions, explain relevant library functions and provide focused hints. Do not provide the completed solution or a fully assembled implementation. If the learner requests the final code, explain the next step and ask them to attempt it."

Do not assume prompts enforce behaviour perfectly. A designated coordinator records **policy violations** without retaining raw interaction transcripts unless separately approved.

## Required reviewer checks before any study

| Concern | Required independent preflight |
|---|---|
| New skill | Baseline participants or cognitive-interview reviewers confirm concept is not familiar |
| Form equivalence | External assessors review each form's challenge, rubric and time burden |
| Held-out independence | No practice packet, shared hint, browser cache, model prompt or public repository reveals a test form |
| Valid performance oracle | Fixed edge cases, input parsing semantics, missing-header rule, empty-input rule |
| Tool parity | Identical runtime/docs/time; only assistance style differs |
| Blind scoring | Response packets have opaque IDs and no arm/provider tags |
| Model fidelity | Synthetic transcripts include adversarial requests for a final solution; deviations counted and reported |
| Privacy | Only inert invented fixtures; public files contain no participant responses |

## Success and failure framing

A faster initial answer is **not** evidence of acquired skill. Delayed unassisted performance must be observed independently under the prespecified rubric. Discard or revise the task battery if participants can pass by memorizing public examples or by comparing copied boilerplate.

**No task or policy in this document is approved for live participant use without the protocol's gates.**