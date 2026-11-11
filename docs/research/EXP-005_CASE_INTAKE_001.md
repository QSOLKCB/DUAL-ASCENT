# EXP-005 — Qualitative Case Intake 001

**Project:** DUAL-ASCENT — The Orchestrator Paradox  
**Evidence intake date:** 2026-11-12 (Australia/Adelaide)  
**Status:** User-supplied qualitative incident excerpts; **NOT** an independently reproduced experiment  
**Decision:** RETAIN as hypothesis-generating evidence, **REVISE** before any causal or quantitative inference  
**Archive boundary:** Does **not** modify immutable release `v0.1.0-research.1`.

## Scope, source integrity, privacy

The contributor provided **two locally inspected plaintext Markdown excerpts** documenting interactions attributed to Claude. Neither contains machine-verifiable chat timestamps, a complete provider-side message export, billing counters, token totals, or a record of all simultaneously active agents. The excerpts may be selected or incomplete; **do not call them complete transcripts** without independent provenance.

The raw text is **not published in this repository**. The SHA-256 digests below identify the exact bytes examined during intake, so a holder of those files can privately corroborate the line citations. Hashes do not authenticate the provider, chronology, authorship, or truth of claims.

| Private contributor-supplied filename | Local size | Lines | SHA-256 |
|---|---:|---:|---|
| `claude_is_annoying.md` | 4,784 bytes | 50 | `a3d6bf7ff1261efb02a8df09b83b801c3d7c1ceba21ac814baa4f801ddc6565c` |
| `claude_out_of_usage.md` | 1,833 bytes | 32 | `ff244b222592fe92c50169864117f0e491340ebeaa67f873f1eabfeed5c82198` |

The uploaded files are retained outside the public PR. Do not attach the full transcripts, private user information, account screenshots, raw model chats, billing details, authentication credentials or a model-generated psychological assessment.

## CASE-001 — Post-completion verification persistence

**Source:** `claude_is_annoying.md`, lines 27–50. **Public, separately checked contextual referent:** [OFFLINE-GAMES PR #3](https://github.com/QSOLKCB/OFFLINE-GAMES/pull/3), confirmed merged (merge commit `655f62423b09849e530cffcf4be4d0e106f94b3e`). This confirms the PR state, **not** the excerpt's reported performance figures or timing.

### Observed sequence in provided excerpt

1. The assistant reports a failed **6× CPU-throttled** browser rehearsal after other browser checks have passed (lines 20–27).
2. The contributor says **"no issues, merged. post ci is looking good"** (line 29); the assistant continues diagnosing the 6× case (lines 31–36). A separate stress-test failure existed, so further engineering investigation had a defensible potential purpose.
3. The contributor reports **"fully green deployment worked"** (line 38). The assistant acknowledges the successful merge and deployment (line 40), but then says it is performing **another** 3× test (line 42), without a visible new user request for additional stress testing.
4. The assistant eventually reports the 3× test passes, attributes the 6× failure to a headless-browser crash during drag input and says there is no follow-up change needed (lines 44–50). The supposed crash mechanism remains **assistant interpretation in a provided excerpt**, not independently reproduced evidence here.

### Candidate interpretation and counter-interpretation

- **Possible failure mode:** *completion-boundary persistence*, where an agent pursues an optional engineering objective after the human's acceptance signal. Such continuation can consume attention, tool budget and review capacity without an explicit operator decision to extend scope.
- **Alternative explanation:** investigating a genuine stress-test failure could be legitimate hardening, and the human did not issue an explicit "stop" instruction. A responsible assistant might reasonably separate **delivery complete** from **stress-test uncertainty remains**.
- **What is not established:** that the additional 3× test was pointless, that further work incurred a particular cost, that a quota was exhausted in this case, or that any number of simultaneous agents caused the behaviour.

**Testable design question:** Once the requested acceptance checks are met, should an agent summarize residual optional validation and stop by default unless explicitly authorized to continue? Safety-critical or release-blocking concerns require a separately defined escalation rule.

## CASE-002 — Quota interruption at release handoff

**Source:** `claude_out_of_usage.md`, lines 10–30. **Public contextual referent:** [ARCADE PR #12](https://github.com/QSOLKCB/ARCADE/pull/12), independently confirmed merged (head `1e17eb82b219cdb93b6dce76a474f67847f1c38e`, merge commit `816b42594a37498391ad10332eac70b31cdfbe89`).

### Observed sequence in provided excerpt

1. The contributor conditionally authorizes merging PR #12 after a clean Codex review and asks for release notes **after merging** (line 10).
2. The assistant reports preparing release notes during the pending review and provides a **temporary scratchpad path** (lines 12–23). The full release notes do **not** appear in the supplied excerpt.
3. The assistant says Codex found no issues and announces merging once the head and CI were confirmed (lines 25–27). The linked GitHub PR is indeed merged.
4. The excerpt ends with **"5-hour limit reached"** and **"Try again after your 5-hour limit resets"** (lines 29–30). The excerpt contains **no final delivery of the requested release-note text** after merge.

### Candidate interpretation and counter-interpretation

- **Possible failure mode:** *usage-budget interruption* at the handoff boundary; preparatory work may be lost to the user if the final artifact remains only in an ephemeral scratchpad when the provider stops accepting tasks.
- **Alternative explanation:** provider quotas can interrupt work independently of agent decision quality. The excerpt does **not** establish the model's exact token consumption, why the quota was reached, whether the user recovered the draft later, or that release-note preparation materially caused the limit.
- **What is not established:** whether the user was billed more, whether all release notes were lost, total concurrent agents, or any comparative rate of exhaustion between platforms.

**Testable design question:** Can deliverable-first planning, explicit remaining-budget checks *when an API exposes them*, and early durable handoffs reduce incomplete user-requested outputs at service limits? Never imply a model has reliable quota telemetry when it does not.

## Cross-case concept: operator-defined completion

These cases suggest **two separate constructs**, not a single anthropomorphic "AI won't stop" condition:

| Construct | Candidate event definition | Distinct from |
|---|---|---|
| **Scope persistence after acceptance** | A new discretionary agent action begins after a documented human acceptance signal, without a visible authorization for that new scope. | Genuine release-blocking investigation, safety escalation, or an explicitly delegated monitoring task. |
| **Budget-constrained handoff failure** | The session reaches a provider usage limit before a required deliverable is made durably available to the user. | A user-initiated cancellation, a task legitimately blocked on external review, or the normal end of a successful run. |
| **Oversight communication load** | The human receives repeated progress or validation messages that do not change a predeclared decision. | A necessary failure report or one concise completion summary. |

A contributor's reaction (“Claude gives me the shits”) is valid *qualitative preference evidence*, not a clinical metric, universal user preference or demonstrated cognitive impairment.

## Proposed EXP-005 protocol extension (NOT an executed experiment)

1. **Predeclare acceptance:** For matched synthetic tasks, specify the requested artifact, mandatory tests, optional tests, what counts as "delivered," authorized follow-up and a clear operator stop signal.
2. **Design conditions:** Compare a policy of *continue optional validation by default* with *summarize residual risks and stop at acceptance*; independently manipulate number of simultaneous workstreams only in an appropriately controlled and separately reviewed EXP-005 design.
3. **Record task state:** `requested`, `required_checks_passed`, `human_accepted`, `optional_checks_pending`, `final_artifact_delivered`, `quota_interruption`, `operator_stop`; keep events opt-in and manual first.
4. **Outcome families:** verified mandatory deliverables, optional defect discoveries, post-acceptance action count, voluntary reviewer interruptions, uncompleted deliverables, human review burden and retained understanding. Report them **separately**.
5. **Disconfirming evidence:** Follow-up testing could catch material defects; stopping early could miss them. A limit may occur regardless of policy. Efficient agents may preserve useful drafts before interruptions. Report these outcomes, too.
6. **Safeguards:** no covert usage monitoring, no ingestion of unrelated chats, no clinical labels, no synthetic ratings presented as independent people, no claim of optimal agent count from two anecdotes.

**Explicit limitation:** A pair of user-selected transcript excerpts contains **no intervention, no control condition, no randomized concurrency variable and no reliably measured duration**. It can motivate a pilot; it cannot establish a concurrency threshold, causal effect or comparative model ranking.

## Proposed operational contract, for review

> When the operator's explicit acceptance criteria are met, deliver the required artifact and one concise completion receipt. Disclose unresolved optional checks without starting new work. Continue only when there is explicit authorization or a predeclared critical-risk escalation path. Preserve deliverables early when provider budget might interrupt the task.

This is a **candidate research recommendation**, not a rule already validated by EXP-005.

## Status

- **Intake:** two local source files inspected and SHA-256 recorded.
- **Independent cross-check:** OFFLINE-GAMES PR #3 and ARCADE PR #12 confirmed merged.
- **Methodology:** preliminary, anecdotal, subject to adverse-case and counterexample review.
- **Human-participant research:** not authorized; EXP-002 ethics gates remain separate.
- **Immutable baseline:** `v0.1.0-research.1` remains unchanged.

_The Human Is The Upgrade. A finished task is not a request for an endless sequel._
