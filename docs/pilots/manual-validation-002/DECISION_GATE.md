# EXP-002 — Independent Manual Validation: Research Gate

**Status as of 2026-11-09:** **REVISE / NOT YET RUN**. This file records what the next independent review must decide. **It does not certify completion, research governance approval, or successful manual-vs-software benchmarking.**

## Prior-phase baseline

[tabletop-001](../tabletop-001/RESULTS.md) reported 7 narrowly scoped synthetic PASS, 2 BLOCKED (T-04 withdrawal governance, T-07 assistance parity) and 1 NOT_RUN (T-08 timed human-operated manual comparison). The prior record concluded **NO BUILD AUTHORIZED**. This packet provides materials to help resolve those constraints, but cannot close human-signoff gates by itself.

## Evidence owners, release blockers and stop rules

| Gate | Owner and independent evidence required | Current status | Blocking consequence |
|---|---|---|---|
| MV-01 — actual manual timing | Human operator fills **local** [time log](OPERATOR_LOG_TEMPLATE.csv) with stopwatch data under [timing protocol](TIMED_OPERATOR_PROTOCOL.md); record errors, order and corrections. | **NOT_RUN** | Cannot assert that a spreadsheet is too slow or software is warranted. |
| MV-02 — two independent reviewers | Two distinct reviewers independently score [fictional cases](REVIEWER_PACKET.md), preserve original sheets; record agreement and ambiguities without revealing scores first. | **NOT_RUN** | Do not claim rater reliability, independent judgment or validated scoring. |
| MV-03 — adjudication design | Qualified measurement reviewer documents meaning of C/R/E, absent-vs-unusable distinction, method of assessing agreement and prespecified resolution process; [blank adjudication template](ADJUDICATION_TEMPLATE.csv). | **BLOCKED** | No scored live outcome accepted. |
| MV-04 — arm/task parity | Research lead fixes versioned H/A/S scripts, time/help caps, model settings and privacy terms; independently validates practice/immediate/delayed task-form equivalence and hidden assessment security. | **BLOCKED** | Do not recruit or declare arm effects. |
| MV-05 — human-study governance | Named qualified lead obtains applicable ethics/IRB determination, participant consent and withdrawal/retention protocol, data-flow inventory, incident contact and preregistration review. | **BLOCKED** | No participant recruitment or personal data collection. |
| MV-06 — purpose and manual comparison | Named decision beneficiary identifies a decision whose answer changes with this evidence; compare paper and CSV and specify what a new utility would add. | **NOT_RUN** | Do not import Monica rev3 app as a foregone conclusion. |
| MV-07 — independent reviewer sign-off | Reviewer feedback identifies unsolved ambiguities and a dated approval/revision decision; only public summary is shareable after screening. | **NOT_RUN** | Remain REVISE until a qualified independent reviewer acts. |

No automatic pass condition or weighted combined 'readiness' score is permitted. **Any blocked mandatory gate remains blocking.** A single person's timed usability test is a feasibility observation, not a controlled study or evidence about other operators.

## Concrete workflow after PR review

1. Check out this PR and read [the kit index](README.md); use an offline folder under your own control for filled review files. No SaaS account or runtime dependency is required.
2. Have two separate people, if available, each receive their own blank `REVIEWER_SHEET_TEMPLATE.csv` and independently evaluate the published fabricated responses. If only one person reviews, record that fact: the independence gate **remains open**.
3. Preserve separate original score sheets. A qualified methodology reviewer checks anchor ambiguity and determines how to assess disagreement; do not calculate agreement from invented labels.
4. Have a human follow the written paper and offline CSV task card and **actually time** both methods. Reverse order on repetition where feasible; record practice/order effects.
5. Have the protocol owner separately resolve approval, consent, rater masking, model/fidelity and data-management prerequisites. These checks do not require any participant contact at the rehearsal stage.
6. Record a **GO / REVISE / STOP** recommendation for manual research readiness, and *separately* a **BUILD / NO BUILD** decision supported by a genuine incremental-utility comparison.
7. Commit at most a minimal **manually reviewed, non-identifying summary** and source-protocol revision, never individual participant records, reviewer identifying information, private sheets, allocation keys or proprietary model transcripts.

## Decision rubric

- **REVISE (current):** review or stopwatch evidence absent; tasks not locked; consent/ethics incomplete; scoring confusion or inadequate masking.
- **GO — synthetic validation complete:** two actual independent reviewers can apply the synthetic rubric with predeclared reliability/ambiguity checks and the manual timed rehearsal has evidence; this **still does not authorize participants or software**.
- **GO — consented human feasibility study only:** a separate qualified lead has documented applicable ethics determination, privacy and consent, allocation/fidelity, blinded scoring, preregistration, data retention and withdrawal handling; this is not met by the synthetic packet.
- **STOP / documentation-only:** no human decision beneficiary, unacceptable privacy/safety burden, ineffective measures or failure to demonstrate a reason to proceed.
- **BUILD (separate, conditional):** after real manual comparison demonstrates repeatable errors or unacceptable costs that specific minimal, privacy-preserving software could materially address, with a separate authorized design and security gate. The default remains **NO BUILD**.

## Public sign-off placeholder (not a completed signature)

| Role | Review required | Evidence | State |
|---|---|---|---|
| Research owner | Purpose/beneficiary, task transfer, protocol viability | TBD | PENDING |
| Independent measurement expert | Scoring anchors, reliability strategy, masked adjudication | TBD | PENDING |
| Ethics/privacy representative | Jurisdictional determination, consent and data handling | TBD | PENDING |
| Manual-workflow operator | Recorded actual method duration, errors and burden | TBD | NOT_RUN |
| Maintainer | Confirm PR contains *only* synthetic forms and protocols | GitHub diff inspection required | PENDING |

**Do not transform the placeholders into approvals without real documented actions.**

## Explicit non-claims

No person has been recruited or assessed. No AI model completed a learning intervention. No independent human rater reviewed these materials as part of this PR. No stopwatch exercise has been performed. No objective skill improvement, dependence, diagnostic interpretation, statistical effect, rater agreement, ethics approval or software-release gate is claimed.

**EXP-005** stays provisional and outside this pilot's scope.

> The Human Is The Upgrade. Building nothing can be the correct, reproducible engineering outcome.
