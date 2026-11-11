/* DUAL-ASCENT: local-only learning challenge.
   No trackers, no APIs, no model calls, no service worker, no dependencies.
   All "completion" claims are self-attested game progress, never research proof. */
"use strict";

(function () {
  const SAVE_KEY = "dual-ascent.hsc.v1";
  const SCHEMA = "dual-ascent-hsc-v1";
  const XP_PER_LEVEL = 100;

  const LEVELS = [
    {
      id: "HSC-001", name: "The Independent Learner", short: "Rust + pure HTML",
      phase: "HUMAN MODE", category: "LEVEL 01 // NO AI", access: "INDEPENDENT",
      description: "Learn from the actual documentation. Build a Rust starter project and a separate pure-HTML page.",
      policy: "NO GENERATIVE AI", policyDetail: "Official docs, ordinary search, manuals and spelling tools only. No chatbot or AI mode.",
      tasks: [
        ["Start with Rust", "Read the Rust getting-started guide and create a working project."],
        ["Run it yourself", "Build and execute the Rust starter from your own terminal."],
        ["Make pure HTML", "Create a browser-rendered page starting from <!DOCTYPE html>, a heading and a paragraph."],
        ["Demonstrate understanding", "Change both examples unaided and explain what the important parts do."]
      ],
      resources: [
        ["RUST GETTING STARTED", "https://rust-lang.org/learn/get-started/"],
        ["HTML REFERENCE", "https://developer.mozilla.org/en-US/docs/Web/HTML"]
      ]
    },
    {
      id: "HSC-002", name: "The Independent Problem Solver", short: "Local IRC server",
      phase: "HUMAN MODE", category: "LEVEL 02 // NO AI", access: "INDEPENDENT",
      description: "Research, configure and troubleshoot a small IRC service using documentation and ordinary search only.",
      policy: "NO AI MODE OR CHATBOTS", policyDetail: "Google/search results, manuals and vendor docs are allowed. Start on localhost; no public internet exposure.",
      tasks: [
        ["Research first", "Choose an IRC server using search results and written reference documentation."],
        ["Keep it local", "Configure a listener bound to localhost and explain the security boundary."],
        ["Prove communication", "Connect two local clients and exchange a message."],
        ["Recover and restart", "Restart the service and repeat the client test."],
        ["Explain your configuration", "Describe the files and choices, including what you would review before any public deployment."]
      ],
      resources: [["IRC PROTOCOL REFERENCE", "https://www.rfc-editor.org/rfc/rfc1459"]]
    },
    {
      id: "HSC-003", name: "The Independent Programmer", short: "Simple Perl",
      phase: "HUMAN MODE", category: "LEVEL 03 // NO AI", access: "INDEPENDENT",
      description: "Learn enough Perl to write, run and modify a tiny program that displays text.",
      policy: "NO GENERATIVE AI", policyDetail: "Use manuals and conventional documentation. You write the code, not an assistant.",
      tasks: [
        ["Learn the basics", "Read a Perl introduction, focusing on program execution and printing text."],
        ["Write and run", "Create your own Perl program that prints a message and run it."],
        ["Make it yours", "Change the displayed message without copying another solution; explain the relevant syntax."]
      ],
      resources: [["PERL INTRODUCTION", "https://perldoc.perl.org/perlintro"]]
    },
    {
      id: "HSC-004", name: "The Guided Learner", short: "Python with AI hints",
      phase: "AI HINTS", category: "LEVEL 04 // AI UNLOCKED", access: "SCAFFOLDED",
      description: "The AI can finally help—but only as a tutor. You still author and debug the Python program.",
      policy: "AI HINTS UNLOCKED", policyDetail: "Questions, concepts, test ideas and debugging hints are allowed. No ready-to-submit code or full solution. This page does not connect to an AI provider.",
      tasks: [
        ["Define your program", "Choose a small, bounded Python task and record how you will know it works."],
        ["Ask for hints only", "Use AI for clues, concepts or debugging questions—not a completed program."],
        ["Write and test yourself", "Implement your Python program and verify its behaviour."],
        ["Transfer the skill", "Make a meaningful variation without AI. Record any accidental full-solution hints as a rule breach."]
      ],
      resources: [
        ["PYTHON TUTORIAL", "https://docs.python.org/3/tutorial/"],
        ["ASSISTANCE RULES", "https://github.com/QSOLKCB/DUAL-ASCENT/issues/7#issuecomment-6804771872"]
      ]
    },
    {
      id: "HSC-005", name: "The Collaborative Explorer", short: "Unfamiliar skill together",
      phase: "COLLABORATION", category: "LEVEL 05 // HUMAN + AI", access: "TOGETHER",
      description: "Explore a skill unfamiliar to the human. Challenge each other, verify the result and preserve independent understanding.",
      policy: "FULL COLLABORATION", policyDetail: "Joint exploration is allowed. The human chooses the goal; keep human and AI contributions distinguishable and testable.",
      tasks: [
        ["Choose a new frontier", "Select a domain genuinely unfamiliar to you. State the goal, constraints and success criteria."],
        ["Collaborate with attribution", "Work with AI on ideas and implementation, recording who contributed what."],
        ["Challenge and verify", "Find contrary evidence, test assumptions and produce an independently checkable artifact."],
        ["Explain it without help", "Describe or extend the result yourself. A model working in context does not imply its weights retrained."]
      ],
      resources: [["ORIGINAL ISSUE PROTOCOL", "https://github.com/QSOLKCB/DUAL-ASCENT/issues/7#issuecomment-6804771872"]]
    }
  ];

  const el = (id) => document.getElementById(id);
  const items = LEVELS.length;
  let loadWarning = "";
  let active = 0;

  function fresh() {
    return {
      schema: SCHEMA,
      levels: LEVELS.map((level) => ({
        checked: level.tasks.map(() => false),
        completed: false,
        notes: "",
        sources: ""
      }))
    };
  }

  function cleanState(value) {
    if (!value || typeof value !== "object" || Array.isArray(value) ||
        value.schema !== SCHEMA || !Array.isArray(value.levels) || value.levels.length !== items) {
      throw new Error("This file is not a supported DUAL-ASCENT save.");
    }
    const result = fresh();
    value.levels.forEach((entry, index) => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry) ||
          !Array.isArray(entry.checked) ||
          entry.checked.length !== LEVELS[index].tasks.length ||
          entry.checked.some((checked) => typeof checked !== "boolean") ||
          typeof entry.completed !== "boolean" ||
          typeof entry.notes !== "string" || entry.notes.length > 2000 ||
          typeof entry.sources !== "string" || entry.sources.length > 1000) {
        throw new Error("Invalid progress record for level " + (index + 1) + ".");
      }
      if (entry.completed && !entry.checked.every(Boolean)) {
        throw new Error("A completed level must have every objective checked.");
      }
      if (index > 0 && !result.levels[index - 1].completed &&
          (entry.completed || entry.checked.some(Boolean))) {
        throw new Error("The save contains progress on a level that was still locked.");
      }
      result.levels[index] = {
        checked: entry.checked.slice(),
        completed: entry.completed,
        notes: entry.notes,
        sources: entry.sources
      };
    });
    return result;
  }

  function load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      return raw === null ? fresh() : cleanState(JSON.parse(raw));
    } catch (error) {
      loadWarning = "Local save unavailable or invalid. Started a fresh session; export to preserve your work.";
      return fresh();
    }
  }

  let state = load();
  active = Math.max(0, state.levels.findIndex((entry) => !entry.completed));
  if (state.levels.every((entry) => entry.completed)) active = items - 1;

  function persist() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      return true;
    } catch (_) {
      return false;
    }
  }

  function unlocked(index) {
    return state.levels.slice(0, index).every((entry) => entry.completed);
  }

  function completedCount() {
    return state.levels.filter((entry) => entry.completed).length;
  }

  function dataMessage(text) {
    el("dataStatus").textContent = text;
  }

  function saveMessage(text) {
    el("saveNotice").textContent = text;
  }

  function updateStatus() {
    const n = completedCount();
    el("statCompleted").textContent = String(n) + " / " + String(items);
    el("statXp").textContent = String(n * XP_PER_LEVEL).padStart(3, "0") + " XP";
    const ai = el("statAi");
    const aiOpen = unlocked(3);
    ai.textContent = aiOpen ? "UNLOCKED / 04+" : "LOCKED / 01–03";
    ai.classList.toggle("ai-unlocked", aiOpen);
    ai.classList.toggle("locked-label", !aiOpen);
    el("progressFill").style.width = String(n * 100 / items) + "%";
    el("overallProgress").setAttribute("aria-valuenow", String(n));
    el("progressCaption").textContent = n === items
      ? "All five levels self-attested."
      : n === 0 ? "Your journey starts here." : String(items - n) + " levels remain.";
  }

  function renderNav() {
    const nav = el("levelNavigation");
    const nodes = LEVELS.map((level, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "nav-level";
      button.dataset.level = String(index);
      button.setAttribute("aria-label", "Level " + (index + 1) + ": " + level.name +
        (unlocked(index) ? "" : " (preview, locked)"));
      if (index === active) button.setAttribute("aria-current", "step");
      const isDone = state.levels[index].completed;
      const isLocked = !unlocked(index);
      button.classList.toggle("is-done", isDone);
      button.classList.toggle("is-locked", isLocked);

      const number = document.createElement("span");
      number.className = "nav-num";
      number.textContent = String(index + 1).padStart(2, "0");
      const copy = document.createElement("span");
      const title = document.createElement("strong");
      title.textContent = level.name;
      const brief = document.createElement("small");
      brief.textContent = level.short;
      copy.append(title, brief);
      const marker = document.createElement("span");
      marker.className = "nav-state";
      marker.setAttribute("aria-hidden", "true");
      marker.textContent = isDone ? "✓" : isLocked ? "◇" : "↗";
      button.append(number, copy, marker);
      return button;
    });
    nav.replaceChildren(...nodes);
  }

  function renderLinks(level) {
    const container = el("missionLinks");
    container.replaceChildren(...level.resources.map(([label, url]) => {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = label + " ↗";
      return a;
    }));
  }

  function renderTasks() {
    const current = state.levels[active];
    const disabled = !unlocked(active) || current.completed;
    const container = el("questList");
    const children = LEVELS[active].tasks.map(([title, detail], index) => {
      const label = document.createElement("label");
      label.className = "quest-item";
      label.classList.toggle("is-checked", current.checked[index]);
      const check = document.createElement("input");
      check.type = "checkbox";
      check.checked = current.checked[index];
      check.disabled = disabled;
      check.dataset.task = String(index);
      check.setAttribute("aria-label", title);
      const copy = document.createElement("span");
      const strong = document.createElement("strong");
      strong.textContent = title;
      const small = document.createElement("small");
      small.textContent = detail;
      copy.append(strong, small);
      label.append(check, copy);
      return label;
    });
    container.replaceChildren(...children);
  }

  function updateMissionActions() {
    const record = state.levels[active];
    const count = record.checked.filter(Boolean).length;
    el("missionTaskCount").textContent = String(count) + " / " + String(record.checked.length);
    const done = record.completed;
    const locked = !unlocked(active);
    const action = el("markComplete");
    if (done && active < items - 1) {
      action.disabled = false;
      action.textContent = "PROCEED TO LEVEL " + String(active + 2).padStart(2, "0") + " ↗";
    } else if (done) {
      action.textContent = "ALL LEVELS ATTESTED ✓";
      action.disabled = true;
    } else {
      action.textContent = "ATTEST LEVEL COMPLETE ↗";
      action.disabled = locked || !record.checked.every(Boolean);
    }
    el("resetCurrent").disabled = locked && !record.completed;
  }

  function renderMission() {
    const level = LEVELS[active];
    const record = state.levels[active];
    const isLocked = !unlocked(active);
    const isAi = active >= 3;
    el("missionCode").textContent = level.id + " / " + level.phase;
    el("missionState").textContent = record.completed ? "ATTESTED" : isLocked ? "PREVIEW / LOCKED" : "AVAILABLE";
    el("missionCategory").textContent = level.category;
    el("missionTitle").textContent = level.name;
    el("missionDescription").textContent = level.description;
    el("bigLevel").textContent = String(active + 1).padStart(2, "0");
    el("missionPolicyTitle").textContent = level.policy;
    el("missionPolicyDescription").textContent = level.policyDetail;
    el("ruleIcon").textContent = isAi ? "✦" : "◈";
    el("missionPanel").querySelector(".mission-rule").classList.toggle("is-ai", isAi);
    el("missionAccess").textContent = level.access;
    el("missionTaskCount").textContent = "0 / " + String(level.tasks.length);
    el("lockedMessage").hidden = !isLocked;
    if (isLocked) {
      el("lockedMessage").textContent = "LEVEL " + String(active + 1).padStart(2, "0") +
        " IS PREVIEW ONLY. Self-attest every objective in Level " +
        String(active).padStart(2, "0") + " to access this mission. The AI rule is an honour system, not an external tool blocker.";
    }
    el("fieldNotes").value = record.notes;
    el("sourceNotes").value = record.sources;
    el("fieldNotes").disabled = isLocked || record.completed;
    el("sourceNotes").disabled = isLocked || record.completed;
    el("saveNotes").disabled = isLocked || record.completed;
    el("saveNotice").textContent = record.completed
      ? "Level attested; reset it to edit notes."
      : isLocked ? "Notes unlock with the level." : "Notes stay in this browser.";
    renderTasks();
    renderLinks(level);
    updateMissionActions();
    el("integrityNote").textContent = record.completed
      ? "Level self-attested. This is game progress, not independent verification of skill. Resetting this level also resets later levels."
      : "Completion is self-reported. These controls do not verify skill, authorship, consent or research-readiness.";
  }

  function render() {
    renderNav();
    updateStatus();
    renderMission();
  }

  el("levelNavigation").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-level]");
    if (!button) return;
    active = Number(button.dataset.level);
    render();
    el("missionTitle").setAttribute("tabindex", "-1");
    el("missionTitle").focus({ preventScroll: true });
  });

  el("questList").addEventListener("change", (event) => {
    const check = event.target.closest("input[data-task]");
    if (!check || !unlocked(active) || state.levels[active].completed) return;
    const index = Number(check.dataset.task);
    if (!Number.isInteger(index) || index < 0 || index >= LEVELS[active].tasks.length) return;
    state.levels[active].checked[index] = check.checked;
    check.closest(".quest-item").classList.toggle("is-checked", check.checked);
    persist();
    updateStatus();
    renderNav();
    updateMissionActions();
  });

  function updateNotes() {
    if (!unlocked(active) || state.levels[active].completed) return;
    state.levels[active].notes = el("fieldNotes").value.slice(0, 2000);
    state.levels[active].sources = el("sourceNotes").value.slice(0, 1000);
    persist();
  }
  el("fieldNotes").addEventListener("input", updateNotes);
  el("sourceNotes").addEventListener("input", updateNotes);
  el("saveNotes").addEventListener("click", () => {
    updateNotes();
    saveMessage(persist() ? "Notes saved in this browser." :
      "Browser storage unavailable; export your progress to keep these notes.");
  });

  el("markComplete").addEventListener("click", () => {
    const record = state.levels[active];
    if (record.completed) {
      if (active < items - 1) { active += 1; render(); }
      return;
    }
    if (!unlocked(active) || !record.checked.every(Boolean)) return;
    if (!window.confirm("Self-attest that you completed every objective in Level " +
        (active + 1) + "? This is a game declaration, not independent verification.")) return;
    record.completed = true;
    persist();
    render();
  });

  el("resetCurrent").addEventListener("click", () => {
    if (!unlocked(active)) return;
    const later = items - active - 1;
    const consequence = later > 0 ? " This will also erase progress on all higher levels." : "";
    if (!window.confirm("Reset Level " + (active + 1) + "?" + consequence)) return;
    const blank = fresh().levels;
    for (let i = active; i < items; i += 1) state.levels[i] = blank[i];
    persist();
    render();
  });

  el("sideQuestButton").addEventListener("click", () => {
    el("sideQuestPanel").hidden = false;
    el("sideQuestTitle").setAttribute("tabindex", "-1");
    el("sideQuestTitle").focus({ preventScroll: true });
    el("sideQuestPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  el("closeSideQuest").addEventListener("click", () => {
    el("sideQuestPanel").hidden = true;
    el("sideQuestButton").focus();
  });

  el("exportProgress").addEventListener("click", () => {
    const payload = {
      ...state,
      exported_at: new Date().toISOString(),
      notice: "Self-reported game progress only. No authorship, competence, or research-readiness verification."
    };
    const blob = new Blob([JSON.stringify(payload, null, 2) + "\n"], { type: "application/json" });
    const uri = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = uri;
    a.download = "DUAL_ASCENT_HSC_progress.json";
    document.body.append(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(uri), 1000);
    dataMessage("Local progress exported. Keep your download somewhere you control; do not upload private notes.");
  });

  el("importProgress").addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if (!file) return;
    if (file.size > 128000) { dataMessage("Import rejected: file exceeds 128 KB."); return; }
    try {
      const incoming = cleanState(JSON.parse(await file.text()));
      if (!window.confirm("Replace your current local progress with the imported save?")) return;
      state = incoming;
      active = state.levels.findIndex((entry) => !entry.completed);
      if (active < 0) active = items - 1;
      const saved = persist();
      render();
      dataMessage(saved ? "Save imported and stored locally." :
        "Save imported in memory only. Browser storage unavailable; export a backup.");
    } catch (error) {
      dataMessage("Import rejected: " + (error instanceof Error ? error.message : "invalid JSON file") + " Nothing was changed.");
    }
  });

  el("resetAll").addEventListener("click", () => {
    if (!window.confirm("Erase ALL five levels, notes and game XP in this browser? Export first if you want a backup.")) return;
    state = fresh();
    active = 0;
    const saved = persist();
    render();
    dataMessage(saved ? "All local game progress cleared." :
      "Progress cleared in memory. Browser storage might be unavailable.");
  });

  render();
  dataMessage(loadWarning || "Local browser save only. No network calls or accounts.");
}());
