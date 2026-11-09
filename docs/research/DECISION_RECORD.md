# Decision Record — DUAL-ASCENT v0.1.0

## Decision

# REVISE

Do **not** begin full software implementation or open a pull request from this commission. Preserve the repository as documentation-only while the protocol, governance, and decision utility are reviewed. The research question is defensible once narrowed to observable trade-offs, but the original celebratory framing risks constructing a tool to validate enthusiasm about human–AI collaboration rather than measuring it.

## Decision rationale

The evidence supports both sides of the central concern. AI assistance can produce meaningful short-run performance gains: in a randomized professional-writing study, mean time fell 40% and quality rose 18% [1]. Yet a large high-school mathematics field experiment found baseline GPT access improved assisted work while later unaided performance was 17% lower than control; a safeguard-oriented tutor largely avoided that observed loss [2]. A coding preprint similarly reported a 17% lower new-library skill assessment in an AI condition without significant mean time gain [3]. Creative assistance also has mixed results: it improved individual story evaluations while narrowing corpus diversity [4]. These findings justify a research protocol that separates outcomes; they do not justify a product that labels people or treats activity as improvement.

The strongest critique of DUAL-ASCENT is that the project may reproduce the behavior it wants to study. A repository, dashboard, ledger, and prediction system can become evidence of implementation activity rather than evidence that a real human decision improved. The existence of a named stack does not establish a beneficiary. The design must therefore pass a manual-protocol comparison: if a paper, spreadsheet, or notebook can answer the decision with less burden and less data risk, software is not justified.

## Decision questions

| Question | Independent answer |
|---|---|
| What useful human decision does this enable? | Whether a specified assistance workflow should be retained because it meets task-quality requirements **and** preserves a specified human safeguard such as delayed independent transfer. |
| Who benefits? | Investigators, educators, and engineering teams deciding between human-only, answer-generating, and scaffolded workflows for a bounded task. Not a manager monitoring workers or a platform optimizing engagement. |
| Could a paper/notebook/manual protocol do the same? | Yes, for the first pilot. A manual protocol is the recommended smallest next step. |
| What would justify software? | Repeated studies require standardized local schema validation, batch integrity receipts, deterministic fixture checks, blinded scoring packet provenance, and offline summaries beyond a spreadsheet’s safe/reproducible capacity. |
| What would justify cancellation? | No decision changes; manual method is equivalent and lower burden; ethical approval/consent cannot be adequate; measures are unreliable; or dashboard/activity incentives displace research value. |
| Is “tool-first” measurable? | Yes as a neutral ordering/traceability construct, but not as a mental-health label. Declared exploration is a valid comparison condition. |

## Accepted constraints

1. v0.1.0 is a protocol-integrity kit, not an AI assistant, coach, detector, or behavioral analytics product.
2. The software collects no telemetry and makes no model/network calls by default.
3. No composite capability, dependence, creativity, or productivity score is permitted.
4. Software tests cannot be used as evidence that human capability improved.
5. Each live study requires ethics/IRB determination, consent, a preregistered plan, explicit data management, and a qualified human research lead.
6. Negative, null, mixed, and adverse results are first-class outputs.

## Unresolved risks

| Risk | Why unresolved | Required resolution |
|---|---|---|
| Construct validity | Agency, meaning, and voice are multidimensional and partly normative. | Pilot cognitive interviews, rubric validation, rater agreement threshold. |
| External validity | Existing studies cover constrained math, coding, writing, and fiction tasks. | Replication across bounded settings before general claims. |
| Model/provider drift | Hosted model versions and policies can change. | Record version/config; do not claim replay when unavailable. |
| Surveillance creep | Logs can become managerial monitoring tools. | Governance policy, no telemetry, allowlist, no employee/student deployment without heightened review. |
| Receipt overclaim | Hashes can be mistaken for a complete audit trail. | Prominent limitation in UI/docs; no authenticity claim. |
| Tool-first project drift | Building infrastructure can outrun decision utility. | Gate every milestone on named decision and manual-protocol comparison. |

## Smallest independently useful next step

Run a **documentation-reviewed, ethics-cleared manual pilot of EXP-002** using a spreadsheet/notebook, fixed tasks, one answer-generating and one scaffolded assistance policy, a 7–14 day held-out unaided transfer test, and two blinded scorers. Do not build more software unless the pilot makes it clear that receipt-backed standardized records would change reproducibility or governance in a way the manual protocol cannot.

## References

[1]: https://doi.org/10.1126/science.adh2586 "Noy & Zhang (2023), productivity experiment"
[2]: https://doi.org/10.1073/pnas.2422633122 "Bastani et al. (2025), learning field experiment"
[3]: https://arxiv.org/abs/2601.20245 "Shen & Tamkin (2026), coding skill formation preprint"
[4]: https://doi.org/10.1126/sciadv.adn5290 "Doshi & Hauser (2024), creativity and diversity experiment"
