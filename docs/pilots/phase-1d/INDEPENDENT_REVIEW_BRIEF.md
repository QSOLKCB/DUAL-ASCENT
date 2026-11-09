# Independent reviewer brief — public synthetic calibration

**Who:** two distinct, genuinely independent human reviewers for *methodological calibration*, not two LLM personas or two assistant-generated copies. A measurement-methods reviewer separately resolves the scoring proposal.

**Review target:** [Phase 1B public fabricated code vignettes](../manual-validation-002/REVIEWER_PACKET.md) under [DRAFT-0.1 scoring anchors](../EXP-002_SCORING.md). No real participants or undisclosed private work are involved.

## Two-stage procedure

**Stage A — blind to the technical oracle, not to public code provenance.**

1. Each reviewer privately copies the [empty scoring sheet](../manual-validation-002/REVIEWER_SHEET_TEMPLATE.csv), not the completed fictional `rater_X/Y_SYNTHETIC.csv` from an earlier phase.
2. Review only the reviewer packet and DRAFT-0.1 scoring anchors, **not** [Phase 1C execution results](../calibration-003/RESULTS.md). The published oracle cannot be made secret retroactively, so a reviewer who already saw it must disclose that exposure.
3. For each `MV-A/B/C` submission, enter separate C/R/E values or mark an unscorable criterion with a concise reason. Do **not** treat a successful published example as proof of generalization.
4. Mark `MV-D` `NOT_SCORED` with blank C/R/E due to `FOLLOWUP_MISSING`. Record any observed conflict with the source anchors rather than forcing zero.
5. Save and lock each **independent original** sheet separately in a private local location before the two reviewers discuss results. Never publish raw files, reviewer identities or undisclosed individual comments.

**Stage B — reconcile against objective evidence.**

6. Only after original ratings are locked, inspect [Phase 1C's executed eight-case matrix](../calibration-003/RESULTS.md). Compare where the reviewer judgments aligned and where they diverged.
7. Record per-criterion exact agreements, disagreements and reasons. Ask a qualified methodologist to determine whether an ordinal agreement statistic is appropriate given **only three** submitted synthetic artifacts; do not claim this tiny sample validates reliability.
8. Record ambiguous rubric language, error-handling assumptions, alternate-form security and possible arm leakage as review findings.
9. Use the blank [feedback](../manual-validation-002/REVIEWER_FEEDBACK_TEMPLATE.csv) and [adjudication](../manual-validation-002/ADJUDICATION_TEMPLATE.csv) forms in a **private** local directory. Do not overwrite either original sheet.
10. The measurement reviewer explicitly accepts, rejects or revises [CR-001](RUBRIC_CHANGE_PROPOSAL.md). Without that separate decision, scoring remains a draft.

## Evidence checklist for a non-identifying public handoff

- Independent reviewer count and **method**, without individual-identifying data.
- Whether either reviewer had previously seen the public execution oracle.
- Number of submitted synthetic packets evaluated; number explicitly unscored.
- Number of C/R/E rubric agreements and disagreements, **with denominators** and any unresolved ambiguity.
- Statement that the exercise was on public **fictional** artifacts, not human participant data.
- Dated, attributable *private* methodological sign-off (public report can refer to the existence of a separately retained sign-off without naming anyone).
- Confirmation that no external AI was used as a substitute for one of the independent human reviewers.

## Review blockers

If only one human can review, if a reviewer is simultaneously the adjudicator without independent oversight, or if original score sheets are overwritten, mark **MV-02 / MV-03 BLOCKED**. No claim of independent scoring may be made.

**This exercise does not by itself qualify anyone to recruit experimental participants.** [Governance](AUSTRALIAN_GOVERNANCE.md) and [decision gates](GATE_REGISTER.md) remain separate.
