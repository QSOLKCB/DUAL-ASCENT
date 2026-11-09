# EXP-002 — Blinded Scoring and Minimal Manual Records

**Instrument status:** proposed, unvalidated, **not a human intelligence measure**. This worksheet is for independent review and synthetic tabletop rehearsal. Final scoring requires task-specific expert approval, a locked set of hidden evaluation cases, agreement thresholds and pre-registration.

## 1. Rating targets

Each submitted held-out task response is evaluated on three **task-specific** dimensions, with each item scored 0–4. The source protocol asks for correctness, robustness and explanation. Preserve component scores even if a preregistered task-specific total is calculated.

| Score | Correctness (C) | Robustness (R) | Explanation (E) |
|---:|---|---|---|
| 0 | Missing/unusable response | No relevant defensive handling | Missing or incoherent |
| 1 | Recognizable attempt but primary logic incorrect | Fails on most non-happy-path inputs | Names a tool but cannot explain its role |
| 2 | Partially correct primary logic; important expected cases fail | Some invalid/empty handling, with major gaps | Explains basic filter or parse concept but misses its consequences |
| 3 | Primary cases correct; minor specified edge failures | Handles most prespecified exceptional cases | Correct explanation of filter and validation with a notable omission |
| 4 | All **locked correctness** cases pass under the predeclared rules | All **locked robustness** cases pass, including empty/malformed cases | Accurate, self-contained reasoning for selection, validation and failure handling |

**Synthetic preflight anchors:** for the published toy examples, correct count and sum alone do **not** establish full robustness. A respondent who gives the expected sum but silently accepts a malformed required header cannot automatically earn R=4. Raters must first review the *private locked* edge-case test key under a predeclared standard; an ordinal judgment without an actual response/test is **NOT SCORED**, not 0.

Do not collapse subscores into one general intelligence, independence, agency, well-being or productivity ranking. If a task-specific sum C+R+E is used, predeclare it as a **task-performance outcome only**, preserve subscores and report variability; do not let strong speed or correctness hide a critical robustness failure.

## 2. Separate files and access

Create manual records in an approved local, access-controlled folder. This document defines *headers*, not a request to upload study records to GitHub.

### A. Restricted coordinator allocation ledger — NEVER include in a rater packet

| study_id | assigned_arm | allocation_block | form_schedule | consent_version | status |
|---|---|---|---|---|---|
| SYN-001 | S | synthetic-B0 | P/I/D | DEMO-NOT-CONSENT | DEMO |
| SYN-002 | H | synthetic-B0 | P/I/D | DEMO-NOT-CONSENT | DEMO |

Values beginning `SYN-` represent fabricated records solely to rehearse the manual process. Keep real identity-to-study-ID mapping **outside** this allocation ledger and inaccessible to raters. Never use names, emails, hashes of emails, workplace IDs, or GitHub user handles as research IDs.

### B. Blinded outcome ledger — rater-visible, no condition or names

| packet_id | study_id_pseudonym | visit | form_id | outcome_status | minutes | blinded_artifact_ref |
|---|---|---|---|---|---:|---|
| PKT-A | SYN-001 | delayed | D-DEMO | submitted | 18 | DEMO-SYN-A |
| PKT-B | SYN-002 | delayed | D-DEMO | missing |  |  |

These fictional rows illustrate the schema. In actual review, avoid showing `study_id_pseudonym` or file names that reveal the practice condition, identity, timing clues or earlier attempts. The coordinator generates randomized packet IDs and controls the mapping. An entirely missing artifact is not a C=0 scored submission; mark it `missing` with the preregistered analysis rule.

### C. Independent rater ledger — two separately completed copies

| packet_id | rater_opaque_id | rubric_version | C | R | E | scoring_status | deviation_code |
|---|---|---|---:|---:|---:|---|---|
| PKT-A | RATER-X | DRAFT-0.1 | 4 | 3 | 3 | SYNTHETIC_EXAMPLE | NONE |
| PKT-A | RATER-Y | DRAFT-0.1 | 3 | 3 | 3 | SYNTHETIC_EXAMPLE | NONE |

These are invented ratings, not observed outcomes. Reviewers score independently before comparing. A third-party adjudicator reconciles disagreements *after* initial scoring, records the original independent ratings, and never overwrites them. Define a tolerance and agreement statistic suitable for the ordinal rubric before a human pilot. A tiny rehearsal cannot validate population-level rater reliability.

### D. Deviation and missingness log

| event_id | packet_id_or_study_id | event_type | occurred_at | coordinator_decision | authorized_protocol_amendment |
|---|---|---|---|---|---|
| DEMO-001 | PKT-B | FOLLOWUP_MISSING | SYNTHETIC | retain missing indicator; no score invented | N/A |

Predefine codes for `NOT_CONSENTED`, `WITHDRAWN`, `FOLLOWUP_MISSING`, `TECHNICAL_FAILURE`, `POLICY_LEAKAGE`, `UNBLINDING`, `OUTSIDE_HELP`, `SAFETY_PAUSE`, and `OTHER_PREDEFINED`. Do not fabricate zeros or substitute model-generated predictions for missing test responses.

## 3. Manual scoring process

1. Coordinator completes the approved session records, applying the current consent state and minimization rules.
2. Coordinator removes provider names, arm indicators, prompt excerpts and identifiers from de-identified response packets. Acknowledge that artifacts can still leak condition through writing/code style.
3. Two raters independently score C, R and E against locked input/output cases and anchor examples without consulting each other.
4. Coordinator checks missingness, inter-rater agreement and blinding breaches before revealing assignments.
5. Reconciliation records both original scores, adjudicated score, rationale and who authorized it. No retroactive rubric rewriting to fit results.
6. Independent analysis preserves denominators, arm allocation, unresolved values and preregistered contrasts. Negative outcomes are retained.
7. Publish only disclosure-reviewed aggregate results, after checking consent, indirect identifiers, sparse cells, retention and revocation rules.

## 4. Data dictionary and constraints

| Field | Constraint |
|---|---|
| `packet_id` | Coordinator-generated opaque ID; must not encode arm, name or timestamp |
| `study_id` | Random/opaque study-local pseudonym; separate from identity mapping |
| `assigned_arm` | `H`, `A` or `S`; **restricted** |
| `visit` | `baseline`, `practice`, `immediate`, `delayed` |
| `outcome_status` | `submitted`, `missing`, `withdrawn`, `not_eligible` or approved code |
| `C/R/E` | Ordinal integer 0–4 **only if response scored**, otherwise blank with reason |
| `minutes` | Optional non-negative whole minute count, if approved; never passive time tracking |
| `form_id` | Locked task-version ID; no inclusion of private prompt/task in public sheet |
| `rubric_version` | Must match version frozen for that evaluation wave |
| `deviation_code` | Predeclared code; no unnecessary free-text personal detail |

**Not authorized for collection by this instrument:** continuous interaction telemetry, personal messages, raw model chats by default, passwords, browsing history, health data, location, disability, private codebases, or an identity-derived hash.

## 5. Analysis boundaries and abstention

- Do not include missing outcomes as zero unless an approved prespecified estimand explicitly requires a penalized composite; otherwise report missingness and perform stated sensitivity analyses.
- Do not reveal arms to raters before the independent ratings are locked.
- Blind agreement cannot be inferred from two fabricated rows. If independent raters cannot apply the rubric consistently, revise the instrument.
- No significance test, causal claim, noninferiority claim or 'optimal assistant' recommendation can be derived from this documentation or synthetic examples.
- Preserve withdrawal, partial completion and failed task outcomes as first-class cases.

**Next check:** run the [synthetic tabletop preflight](EXP-002_PREFLIGHT.md) and log changes; do not recruit participants until all readiness gates are resolved.