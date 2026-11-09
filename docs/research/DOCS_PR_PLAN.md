# Documentation-Only GitHub Pull Request Plan — Revision Three

## Status and objective

This is proposed scope only. **No pull request was created, modified, pushed, or merged during any commission pass.** The PR remains documentation-only and must preserve **REVISE**: no human-subject experiment, efficacy claim, production implementation, or human-capability result is complete.

Its purpose is to make the independent evidence assessment, manual-pilot-first decision, corrected strict-contract boundary, and third-pass audit record reviewable before maintainers decide whether the project remains documentation-only or prepares a manual pilot.

## Proposed branch and title

- **Branch:** `docs/research-commission-001-rev3`
- **Title:** `docs: add independent research record and third-pass validation gates`

## In-scope paths

| Proposed path | Purpose |
|---|---|
| `README.md` | Research-status link and explicit absence of human-study/production-result claim. |
| `docs/research/README.md` | Package index and evidence-status legend. |
| `docs/research/RESEARCH_REPORT.md` | Adversarial synthesis and REVISE recommendation. |
| `docs/research/EVIDENCE_REGISTER.md` | Sources, evidence level, limitations, and uncertainty. |
| `docs/research/EXPERIMENT_PROTOCOLS.md` | Falsifiable EXP-001–EXP-004 drafts. |
| `docs/research/DATA_SCHEMAS.md` | Corrected reference-contract documentation and fixture-backed receipt example. |
| `docs/research/IMPLEMENTATION_SPEC.md` | Actual supported subset, strict limits, and designed-only deferrals. |
| `docs/research/SECURITY_PRIVACY.md` | Privacy, consent, threat-model, receipt-limit, and governance boundaries. |
| `docs/research/TEST_PLAN.md` | Executed/static/proposed/not-tested distinction and release stops. |
| `docs/research/ROADMAP.md` | Phases, gates, and cancellation conditions. |
| `docs/research/DECISION_RECORD.md` | REVISE rationale and manual-pilot-first decision. |
| `docs/research/REVISION_LOG.md` | Incremental first/second/third-pass correction traceability. |
| `docs/research/VALIDATION_REPORT.md` | Actual third-pass commands, outputs, archive checks, and remaining gaps. |
| `docs/research/THIRD_PASS_AUDIT.md` | Independent-audit reproduction and closure record. |
| `docs/research/HANDOFF.md` | Review handoff and conditions for any later implementation PR. |
| `docs/research/DOCS_PR_PLAN.md` | This scope and merge gate. |

## Explicitly out of scope

The PR must not add Python/JavaScript source, tests, workflows, dashboard assets, fixtures, archives, checksums, licenses for a proposed source archive, participant data, real study data, prompts, recruitment text, consent capture, hosted services, model/API integration, telemetry, secrets, credentials, analytics, behavioral monitoring, diagnostic labels, productivity rankings, or efficacy claims. In particular, `DUAL_ASCENT_PROPOSED_IMPLEMENTATION_rev3.zip`, its `sha256sums.txt`, and all source/tooling members are separately reviewed reference artifacts and must **not** be committed by this documentation-only PR.

## Review and merge gates

| Reviewer | Required decision |
|---|---|
| Research lead | Are hypotheses falsifiable, exploration legitimate, and negative results obligatory? |
| Ethics/privacy reviewer | Are surveillance/diagnostic uses excluded and live-study gates adequate? |
| Citation reviewer | Does every empirical claim map to accurately classified evidence? |
| Maintainer | Is the diff documentation-only with no code/data/CI/archive addition? |
| Security reviewer | Are strict-decoding, receipt, metadata, and SHA limits accurate and noninflated? |
| License reviewer | Are external sources cited rather than copied and project documents compatible with repository intent? |

Merge only if reviewers affirm **REVISE**, retain the manual-pilot-first gate, and confirm no code or human data is introduced. A future implementation PR requires named decision utility, demonstrated manual-protocol insufficiency, ethics/consent/retention review, preregistration, scoring/blinding plan, feasibility evidence, separately reviewed local-first source/tests, and an explicitly approved scope.
