# Independent Technical Review — Revision Three

**Date:** 2026-11-09  
**Repository:** QSOLKCB/DUAL-ASCENT  
**Scope:** Proposed code/archive checks and research documentation intake; *not* an empirical human-study review or software release approval.  
**Status:** **PASS for the documented synthetic regression gate; REVISE for research readiness.**

## Received evidence and provenance

| Delivered archive | Independent SHA-256 |
|---|---|
| `DUAL_ASCENT_RESEARCH_PACKAGE_rev3.zip` | `6e79beecf4322554dc4f9fff1820b5d82af1e701cda1a4c3d0b142adc2fab59a` |
| `DUAL_ASCENT_PROPOSED_IMPLEMENTATION_rev3.zip` | `76875a240911fe96aa86311b2832c3b94361b70ff63086cabc2f3de1a21d942f` |

Both archive digests matched the supplied external `sha256sums(20261109-050454).txt`, and both archives passed `unzip -t`. Member names were screened for absolute/traversal paths and ZIP symlinks; none were detected.

**Source preservation:** The 14 imported Markdown files other than `ROADMAP.md` match their extracted rev3 source bytes exactly; GitHub content blob IDs were compared with local `git hash-object` results for all 14 paths. The root `README.md` was editorially extended with status links, and `ROADMAP.md` reconciles the rev3 source with a clearly marked post-rev3 candidate EXP-005.

## Locally executed validation (independent)

Environment: Python **3.13.5** on Linux, standard-library code, `-I -B` for the independent gate. This is a separate environment from Monica's reported Python 3.14.4.

| Check | Observed |
|---|---|
| Supplied unit-test discovery | **22 tests passed** |
| Immutable `DUAL_ASCENT_THIRD_PASS_GATE.py` on extracted source | **8/8 scenarios passed**, 0 unresolved |
| Invalid list/object goal mode | Controlled validation failure, code 2; no traceback |
| Extreme integer probability | Controlled validation failure, code 2; no traceback |
| Unpaired UTF-16 surrogate in accepted strings | Controlled validation failure, code 2 |
| Valid multilingual and astral text | Validated and round-tripped through receipt/verify |
| ZIP checksum manifest | Both archives **OK** |

This confirms correction of the known third-pass failure cases, **not** comprehensive security hardening or participant-study validity.

## Empirical-source spot checks (not a complete citation audit)

Primary or publisher/abstract records for the following were independently cross-checked against the delivered evidence register:

- Bastani et al. (2025), PNAS, DOI `10.1073/pnas.2422633122`: unaided learning and safeguards in school mathematics.
- Noy and Zhang (2023), Science, DOI `10.1126/science.adh2586`: writing-task time and quality effects.
- Doshi and Hauser (2024), Science Advances, DOI `10.1126/sciadv.adn5290`: better-rated individual fiction with narrower collective diversity.
- Shen and Tamkin (2026), arXiv `2601.20245`: coding-skill study, **preprint/not peer reviewed**.

Research source status labels and limitations in the evidence register have **not** been upgraded on this basis. The video case remains personal testimony, not diagnostic evidence.

## Remaining release and research gates

- Hosted CI was not independently executed in this documentation PR; no executable code/workflows have been added here.
- The proposed reference utility does not establish human-skill improvement, calibrated trust, creative identity, or agency.
- Python 3.11–3.12 compatibility, live human privacy/consent operations, accessibility, hostile filesystem concurrency, comprehensive denial-of-service hardening, and any independent security review remain unresolved.
- **EXP-005 — The Orchestrator Paradox** was added by QSOL-IMC after Monica rev3. It is a proposed experiment, not a fifth commissioned research result. Its methods require separate literature review, task construction, safeguards, and appropriate ethics determination.
- The **REVISE** decision and manual-EXP-002-pilot-first gate remain controlling. An acceptable manual protocol can be the final outcome: software is optional.

## Pull request boundary

This branch contains documentation only. No imported Python source, fixtures, workflow, ZIP, checksum manifest, participant data, telemetry, AI service calls, or real-user experiments are being merged.

**SHA-256 establishes byte consistency, not scientific truth, authorship, informed consent, or a trusted timestamp.**
