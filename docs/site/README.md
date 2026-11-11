# DUAL-ASCENT learning site — operations and evidence boundaries

The browser site is a **voluntary gamified interface** to the challenges proposed in [Issue #7](https://github.com/QSOLKCB/DUAL-ASCENT/issues/7#issuecomment-6804771872). It is **not** the actual human-subjects research platform proposed in Monica's implementation archive. The governing scientific decision remains **REVISE / NO BUILD AUTHORIZED** for that platform.

## Architecture and deployment

- **index.html** — semantic, accessible landing page with objectives, journal and resources.
- **styles.css** — responsive self-hosted styling; no external fonts, images, frameworks or stylesheets.
- **app.js** — five-level curriculum, self-attested objectives, local journal, import/export, sequential progress.
- **tests/test_site_contracts.py** — Python standard-library static contracts.
- **.github/workflows/site-checks.yml** — read-only tests on PRs and main.
- **.github/workflows/pages.yml** — verifies and publishes the three static site assets on **every push to main**, including changes only to README or the roadmap. There is intentionally **no paths filter**; a manual workflow dispatch from an unmerged branch is also blocked.

## Automatic GitHub Pages deployment

In **Settings → Pages → Build and deployment**, select **Source: GitHub Actions**. Merge the deployment workflow PR into `main`; that push triggers the first deployment, provided the repository permits Pages deployment from GitHub Actions and the `github-pages` environment allows main.

The workflow runs the Python standard-library tests, packages only `index.html`, `styles.css` and `app.js`, then publishes through GitHub's Pages Actions. **Every subsequent main push** repeats the tests and deployment, even if only Markdown documentation changes. The published assets still reflect the committed site code.

If needed, manually run **Actions → Deploy DUAL-ASCENT to GitHub Pages → Run workflow → main**. The two explicit main-branch guards prevent a dispatch from any other branch from publishing. Review both `build` and `deploy` job results and then verify https://qsolkcb.github.io/DUAL-ASCENT/ . Passing the separate site-checks workflow does not prove the Pages deployment succeeded.

Local execution:

    uv run --no-project python -m http.server 8000

Open **http://localhost:8000/**. Opening index.html directly works in many browsers, but file-URL storage behaviour can vary.

Tests:

    uv run --no-project python -I -B -m unittest discover -s tests -v

## Unlock and scoring contract

- Levels HSC-001–003 require independent learning using conventional documentation, manuals and ordinary search. **No generative AI** is permitted by the challenge rules.
- HSC-004 becomes **available in the local game UI** only after the first three levels are self-attested complete. AI guidance is limited to hints, explanations, questions and debugging clues—no full solution.
- HSC-005 unlocks after Level 4. The human chooses an unfamiliar skill and collaborates with AI, retaining attribution and an unaided follow-up.
- Later levels can be previewed but not checked off until unlocked.
- Each self-attested level grants **100 GAME XP**, not a research score. Completion can never prove independent learning, authorship, agency, consent or any empirical outcome.
- Resetting an earlier level clears that level and all subsequent level progress after confirmation.
- The website **does not connect to, block or technically enable** real AI services. The no-AI rule is an **honour system**.

## Privacy and local saves

The website stores progress in browser **localStorage** under the versioned key dual-ascent.hsc.v1 when available. User-authored field/source notes are limited in length and rendered strictly as text, never HTML. Imported JSON is checked for the correct schema, Boolean checklist values, checklist sizes, completed-state consistency and sequential progress. Export is user-initiated.

No login, telemetry, tracking pixel, AI API, service worker or external executable asset is included. **GitHub Pages still serves page assets over normal HTTP** and external documentation links make requests if clicked. Browser sync, extensions and local backups can independently affect the privacy of saved data. Do not enter private participant records, credentials, secrets or other sensitive material.

An exported JSON file is an optional personal record, **not an authenticated research receipt**. A SHA-256 hash, if separately computed, witnesses bytes and not the user's identity or effort.

## Original issue and research separation

The site reflects the five HSC levels, the optional EXP-003A human-only writing/authorship challenge and the open EXP-002 Phase 1D review gates in [Issue #7](https://github.com/QSOLKCB/DUAL-ASCENT/issues/7). The EXP-002 scientific gates are **read-only**. They require two independent human rubric reviewers, a real manual-workflow stopwatch comparison, qualified measurement review and applicable ethics determinations. Game progress cannot satisfy them. EXP-005 — The Orchestrator Paradox is linked for context only.

## Verification status

**Executed on feature branch preparation:**

- JavaScript passed V8 syntax parsing.
- An in-memory **mock-DOM interaction rehearsal** passed **18 assertions** covering starting state, locked Level 4 preview, first three level completions, unlocking Level 4, local note storage, and cascading reset.
- A separate in-memory mock-DOM rehearsal passed **8 more assertions** covering versioned JSON export, valid import, inert note preservation, out-of-order/oversized import rejection, preservation of existing state after rejected import, and full reset.
- Static GitHub source inspection confirmed all JavaScript-referenced element IDs occur in HTML, all loaded styles/scripts are local, and no app.js fetch/XHR/WebSocket/eval/innerHTML patterns were present.

These checks are **not** real browser screenshots, comprehensive accessibility testing, **real-browser** import/export validation, or a live human-learning evaluation. The CI workflow status needs independent verification on the pull request. No Pages deployment is claimed until the merge and actual Pages build succeed.

**Reviewer smoke-test suggestions:** open through a local HTTP server, test narrow/desktop widths and keyboard access, verify Level 4 cannot be self-attested before Levels 1–3, complete the first three levels, save/refresh, export/import JSON, reject malformed and out-of-order imports, reset Level 1 and confirm Level 4 relocks, inspect optional side quest and read-only research gates.

> The AI Doesn't Unlock Until Level 4. The Human Is The Upgrade.
