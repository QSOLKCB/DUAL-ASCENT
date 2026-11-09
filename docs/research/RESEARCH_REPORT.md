# DUAL-ASCENT Research Report

## Independent assessment

**Question.** The central hypothesis is testable only when decomposed: an AI-assisted workflow may improve **task-phase usefulness** while preserving or improving a separately measured human safeguard such as delayed independent transfer, calibrated error detection, agency, or creative diversity. “Human capability” is not a single validated latent quantity, and a faster artifact is not evidence of learning, autonomy, or meaningful achievement.

> **Operational conclusion:** DUAL-ASCENT should not attempt to calculate a human-upgrade score. It can support auditable protocols that expose trade-offs rather than conceal them.

The currently inspected upstream repository, commit `4aca633`, contains only `README.md` and `LICENSE`. Its claim is aspirational and has no implementation, human-subject protocol, data, or efficacy result. All proposed v0.1.0 design material in this package is prospective.

| Finding | Evidence strength | What it supports | What it does **not** support |
|---|---:|---|---|
| Unrestricted AI can raise assisted mathematics performance while reducing later unaided performance; hint-oriented prompting mitigated the observed loss. | High for one field experiment | Assistance design should be randomized separately from assistance availability. | A conclusion that all AI use damages learning. |
| ChatGPT improved short-run professional-writing speed and quality in a preregistered experiment. | High for constrained writing tasks | Productivity is a legitimate outcome and possible benefit. | Persistent skill formation, transfer, or meaningful achievement. |
| In a randomized coding study, AI assistance lowered new-library skill scores without a significant mean time gain. | Moderate; full preprint, not peer reviewed; affiliation conflict | Held-out code-reading/debugging tests are essential. | Generalization to all tools, programmers, or assistance styles. |
| AI story ideas improved individual ratings but made the corpus more similar. | High for short online fiction task | Individual quality and collective diversity can diverge. | Long-term erosion of identity or universal loss of authorship. |
| Automation bias literature identifies overreliance as a task- and context-dependent error risk; training, accountability and presentation can mitigate it. | Moderate-high synthesis, primarily decision support | Measure correct acceptance and correct rejection, not raw reliance. | That use frequency diagnoses dependency or pathology. |

## Literature synthesis

### Complementarity, offloading, reliance, and calibration

Cognitive offloading is not inherently a defect. It is the use of action or external representations to reduce a task’s cognitive demand, and can be rational when the external aid is reliable and the retained skill is not required [1]. The relevant risk is **miscalibrated delegation**: accepting erroneous advice, failing to seek needed information, or allowing a temporary performance aid to replace a capability needed later. A systematic review of automation bias screened 13,821 records and included 74 studies; it identified experience, trust/confidence, workload, complexity, and time pressure as mediators, with training, accountability, confidence information, and advice presentation among candidate mitigators [2]. The literature is therefore incompatible with a simple “more automation is bad” claim.

AI can provide real complementarity. In a preregistered experiment of 453 college-educated professionals, ChatGPT access reduced mean time on writing tasks by **40%** and raised output quality by **18%**; lower-skill participants benefited more [3]. That result is a decisive counterweight to a blanket anti-AI narrative. However, it measures short-run task performance, not later solo competence. DUAL-ASCENT should model the difference explicitly: quality and time are valuable endpoints, but cannot stand in for transfer, checking ability, or agency.

### Learning, retention, and independent transfer

The strongest directly relevant peer-reviewed result is Bastani et al.’s field experiment in high-school mathematics. Nearly one thousand students used either a baseline GPT-4 interface, a safeguarded GPT tutor, or textbooks. In AI-assisted practice, the baseline and safeguarded tutors improved scores by **48%** and **127%** respectively. On later unassisted exams, the baseline GPT arm was **0.054** below control on a 0–1 score (SE 0.022), described as a **17%** reduction, whereas the safeguarded tutor estimate was **−0.004** (SE 0.013) [4]. The study’s single-school, single-country mathematics setting restricts generalization, yet it strongly rejects the proposition that practice-time performance is sufficient evidence of learning.

Shen and Tamkin’s 2026 preprint provides a parallel coding signal. In randomized tasks involving an unfamiliar asynchronous Python library, AI assistance was associated with a **17%** lower skill evaluation score (Cohen’s *d* = 0.738, *p* = .010) and no significant mean completion-time improvement. Some cognitively engaged patterns, such as conceptual questioning, appeared compatible with better outcomes [5]. These pattern findings are observational within the experiment and the work is not peer reviewed; moreover, author affiliation/fellowship links to Anthropic require an independence caveat. Nevertheless, it motivates EXP-002’s randomization of *assistance style*, not merely tool access.

### Agency, autonomy, and meaningful achievement

Agency is a participant’s capacity to set, revise, and act on reasons; it is not equivalent to working manually, declining a tool, or producing more text. Self-determination research gives a useful theoretical vocabulary—autonomous rather than controlled motivation—but it does not validate an AI-specific agency meter [6]. DUAL-ASCENT should use a bounded combination of pre-tool goal authorship, ability to select “do not build,” delayed goal-to-artifact traceability, and consented participant reflection. It should not infer intrinsic motivation from logs.

The main contradictory possibility is that tool-led play itself can be autonomous, educational, and innovative. New capabilities often create genuine discovery opportunities before users can articulate applications. A goal-first condition that condemns exploration would answer its own question by design. Hence EXP-001 includes a **declared-exploration** arm with its own legitimate criterion: learning or discovery under a fixed time/cost boundary. The comparison is not curiosity versus discipline; it is transparent exploration versus capability-led work with no independently stated value test.

### Creativity, individuality, and authorship

Doshi and Hauser preregistered an online fiction experiment with 293 analyzed writers and 600 independent evaluators. Writers with one or up to five optional GPT-4 ideas saw novelty increases of **5.4%** (*b*=0.207, *p*=.021) and **8.1%** (*b*=0.311, *p*<.001), respectively, yet AI-enabled stories were more similar to one another [7]. The result is genuinely mixed: it supports individual uplift, especially for less-creative writers, and a possible collective-diversity cost. It does not establish loss of individual identity over time, nor does it imply that human-only work is always more valuable.

Creative authorship is partly normative and partly experiential. Blind ratings can evaluate novelty/usefulness; they cannot settle who morally deserves authorship. Participant-rated ownership, meaning, and willingness to disclose assistance are informative but subjective. EXP-003 therefore treats quality, diversity, voice distinctiveness, and personal meaning as separate outcomes. It deliberately avoids a single embedding-distance score and reports rater agreement; poor agreement is a measurement failure, not a license to overinterpret model output.

### Prospective intention prediction

There is no established evidence base showing that an AI can access a collaborator’s future intention. A system can nevertheless be benchmarked on a narrower observable claim: whether, given prior engineering context, it predicts the participant’s next independently declared action better than transparent baselines. That benchmark is vulnerable to base rates, post-hoc reformulation, and information leakage. EXP-004 therefore requires precommitment, salt-revealed SHA-256 receipts, a predefined action taxonomy, blinded scoring, a continuation baseline, and probability calibration. Superior performance would show predictive usefulness under that protocol, **not** mind reading, agency substitution, or consciousness.

## Brad the Dad qualitative case

The supplied transcript and video describe four self-identified patterns: tool-first project search after discovering Jev; treating slower work as waste; devaluing personal effort; and perceived averaging of expression. The creator’s example is an important hypothesis generator, not clinical evidence. The term in the video title is not used here as a diagnosis.

The Jev episode is analytically useful because ordering is observable: tool discovery preceded search for a project. But that ordering alone does not establish a problem. Tool-first experimentation is legitimate when the participant explicitly declares exploration, bounds the cost, specifies what would count as learning/discovery, and can stop with no artifact. The neutral construct is **goal–tool mismatch**, measured as the rate at which a session lacks a prior goal/exploration declaration, beneficiary, acceptance test, and delayed traceable value—not a measure of illness, addiction, or intelligence.

| Case pattern | Respectful measurable construct | Excluded interpretation |
|---|---|---|
| “The tool is the point” | Pre-tool goal or declared-exploration completeness; delayed goal–artifact traceability; no-build selection | Pathology, novelty-seeking diagnosis |
| “Slow is waste” | Voluntary time allocation and reflection on displaced activity | A claim that speed is morally wrong |
| “Time has no value” | Self-reported process value, ownership, and regret; qualitative interview | Monetary valuation of a person’s time |
| “Everything averages” | Blind quality/voice ratings and corpus-level diversity | Proof that AI destroys creativity |

## Is the central hypothesis testable?

**Yes, conditionally.** The hypothesis becomes falsifiable if a protocol predefines (a) a task-quality threshold, (b) a human safeguard threshold, (c) an assistance workflow, and (d) a delayed, held-out measurement. It fails if it treats self-report as objective improvement, calls all offloading dependency, or validates itself with activity counts.

A justified statement would be limited, for example: “In this task, population, model configuration, and follow-up interval, a hint-constrained workflow met predeclared quality non-inferiority and did not reduce delayed transfer beyond the smallest effect of interest.” It would not be: “AI made participants more capable.”

## Project-existence challenge

The useful decision is narrow: **Which assistance workflow, if any, should a research team retain for a specified task once both task quality and independent human capability are measured?** A paper, notebook, and manual protocol can answer this for an early pilot. Software becomes justified only when teams need repeatable local consented records, immutable-batch integrity checks, deterministic fixture validation, blinded scoring packets, and a static report across more than one study.

The project should remain documentation-only if a manual spreadsheet/notebook produces the same decision with lower burden, if no owner can name a decision changed by the data, if ethics/consent cannot be made adequate, or if a pilot demonstrates inadequate rater reliability or high participant burden. The proposed system must never optimize prompts, tokens, commits, repositories, or session counts.

## Recommendation

# REVISE

The research question is useful and testable, but the implementation must be reframed as a **minimal protocol-integrity kit**, not as a tool to detect drift or upgrade humans. Proceed only through a documentation-only PR after independent review. The smallest independently useful next step is a preregistered, ethics-reviewed **manual or spreadsheet pilot of EXP-002** with held-out delayed transfer and a small blinded scoring exercise. Build v0.1.0 only if that pilot shows a real need for reproducible local records/receipts beyond the manual protocol.

## References

[1]: https://doi.org/10.1016/j.tics.2016.07.002 "Risko & Gilbert (2016), Cognitive Offloading"
[2]: https://doi.org/10.1136/amiajnl-2011-000089 "Goddard, Roudsari & Wyatt (2012), Automation bias: a systematic review"
[3]: https://doi.org/10.1126/science.adh2586 "Noy & Zhang (2023), Experimental evidence on productivity effects of generative AI"
[4]: https://doi.org/10.1073/pnas.2422633122 "Bastani et al. (2025), Generative AI without guardrails can harm learning"
[5]: https://arxiv.org/abs/2601.20245 "Shen & Tamkin (2026), How AI Impacts Skill Formation"
[6]: https://doi.org/10.1037/0033-2909.125.6.627 "Deci, Koestner & Ryan (1999), Extrinsic rewards and intrinsic motivation meta-analysis"
[7]: https://doi.org/10.1126/sciadv.adn5290 "Doshi & Hauser (2024), Generative AI enhances individual creativity but reduces collective diversity"
