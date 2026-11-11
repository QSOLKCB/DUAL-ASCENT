# DUAL-ASCENT

**The Human Is The Upgrade.** Two intelligences. One expanding horizon.

### 🎮 The AI Doesn't Unlock Until Level 4.

**Learning site:** [qsolkcb.github.io/DUAL-ASCENT](https://qsolkcb.github.io/DUAL-ASCENT/) (available after merging and selecting the repository root for GitHub Pages).

The GitHub Pages landing site turns the **five Human Skill Challenges** in [Issue #7](https://github.com/QSOLKCB/DUAL-ASCENT/issues/7#issuecomment-6804771872) into a progressive learning game. The first three levels are AI-free. At Level 4, the human may ask for tutor hints. At Level 5, the human chooses a new skill to explore with AI as a collaborator.

| Game level | Challenge | Assistance allowed |
|---|---|---|
| HSC-001 | Rust getting started **and** a pure HTML page | No generative AI |
| HSC-002 | Research and run a **localhost-only** IRC server | Search and manuals, no AI mode |
| HSC-003 | Write, run and alter a simple Perl text program | No generative AI |
| HSC-004 | Build a Python program with *hints*, then alter it unaided | AI hints, not complete solutions |
| HSC-005 | Investigate a skill the human hasn't learned yet | Full transparent human–AI collaboration |

**Optional side quest:** [EXP-003A — The Human Is The Author](https://github.com/QSOLKCB/DUAL-ASCENT/issues/7#issuecomment-6804580813). Create something independently, then separately evaluate AI versus human authorship predictions under blinded conditions. A writing-style guess is not proof of provenance.

### Local progress is not research evidence

The site uses only **index.html**, **styles.css** and **app.js**. It has **no framework, npm, hosted database, telemetry, third-party runtime scripts, AI provider integration or account**. Game progress saves in the browser's localStorage when available; users can export/import a JSON save. Browser/device backups or extensions may access local data, so never put secrets or private study records into game notes.

- Level gates are an **honour system**, not a mechanism to block external AI tools.
- XP is **self-reported game progress**, not verified skill, authorship or a research endpoint.
- The website does **not gather human-participant data** or authorize a study.
- The independent human reviewers, timed manual comparison, ethics determination and BUILD/NO BUILD decision in Issue #7 **remain open**.

See [site operations, deployment and privacy](docs/site/README.md).

## Run locally

From the repository root:

    uv run --no-project python -m http.server 8000

Open **http://localhost:8000/**. The static page can also be opened directly from a file URL, but some browsers restrict local storage for file URLs.

**Dependency-free checks:**

    uv run --no-project python -I -B -m unittest discover -s tests -v

[GitHub Actions](https://github.com/QSOLKCB/DUAL-ASCENT/actions/workflows/site-checks.yml) runs the Python checks on PRs and on merged main. **GitHub Pages auto-deployment:** the [Pages workflow](.github/workflows/pages.yml) tests and publishes the static game on **every push to `main`**, including README-only changes. In **Settings → Pages**, select **Source: GitHub Actions**. PR branches cannot publish; merging this deployment PR is the first main-branch trigger.

## Research status

**Controlling scientific decision: REVISE.** DUAL-ASCENT is an open-source research and documentation programme, not a validated learning intervention, cognitive-improvement product or authorized human-participant study.

- [Independent research index](docs/research/README.md)
- [Evidence register](docs/research/EVIDENCE_REGISTER.md)
- [Research decision record](docs/research/DECISION_RECORD.md)
- [Roadmap, including provisional EXP-005 — The Orchestrator Paradox](docs/research/ROADMAP.md)
- [EXP-002 Phase 1D independent human-validation handoff](docs/pilots/phase-1d/README.md)
- [Issue #7 — outstanding independent human review](https://github.com/QSOLKCB/DUAL-ASCENT/issues/7)

The initial research foundation remains in the [immutable v0.1.0-research.1 pre-release](https://github.com/QSOLKCB/DUAL-ASCENT/releases/tag/v0.1.0-research.1). The new game is a **separate, voluntary learning interface**; it does not alter the frozen research snapshot.

**License:** Apache-2.0 (see [LICENSE](LICENSE)).

> A successful AI collaboration makes the human more capable—not more dependent.
