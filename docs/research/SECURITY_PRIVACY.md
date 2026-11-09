# DUAL-ASCENT Security and Privacy Design

## Security objective

DUAL-ASCENT must protect participant dignity and research integrity more than it protects data volume. The system is local by default and must collect the smallest data sufficient for a preregistered research question. It is not designed to diagnose unhealthy technology use, infer personality, monitor employees/students, rank collaborators, or ingest personal journals/chats.

> A SHA-256 receipt can demonstrate that a disclosed record batch matches its recorded digest. It cannot demonstrate that the records are true, consensual, complete, confidential, independently timestamped, or authored by the named person.

## Consent design

Live studies require jurisdiction-appropriate ethics/IRB review or written determination before recruitment. The software is not an IRB substitute. Consent is an ongoing process, not a clickbox: participants receive a plain-language purpose, procedures, duration, foreseeable risks, benefits/absence of guaranteed benefit, data categories, AI/provider handling, sharing, retention, compensation, withdrawal process, contacts, and complaint/ethics channel before data collection.

| Consent requirement | v0.1.0 rule |
|---|---|
| Voluntariness | No recruitment of direct reports, students, or other dependent people without independently approved safeguards. Refusal has no penalty. |
| Scope | Consent separately for task artifacts, audio/screen capture if ever proposed, optional reflections, de-identified sharing, and contact for follow-up. Default excludes raw chats and private creative work. |
| Withdrawal | Participant can stop without explanation. Future use stops where feasible; deletion/retention follows approved policy and is documented. |
| No diagnosis | Notices explicitly say the study does not diagnose dependence, mental illness, intelligence, or creativity. |
| Tool data | Explain whether any external model is used, which data reach it, retention terms, and that a local-only/no-model route exists where possible. |
| Recontact | Optional and separate consent; no automatic cross-study linkage. |

A participant’s `consent_id` links protocol records to a local consent artifact. The identity-to-pseudonym mapping remains separate from research data and is never exported with a public/de-identified dataset. The system must show a current-consent check before accepting a live session record.

## Data minimization and retention

The required v0.1.0 fields are study-local pseudonymous IDs, assignment, task artifact or score only where explicitly consented, scoring data, and protocol/provenance metadata. The default must **not** collect names, emails, IP addresses, geolocation, keystrokes, browser history, raw prompts, full chats, journals, health information, biometric data, or passive usage telemetry.

Retention periods must be protocol specific. Store raw identifiers separately with access restricted to the authorized coordinator. Store the research bundle on an encrypted device/account selected and managed by the operator. The tool warns that filesystem encryption, backup deletion, and access-control efficacy are operational responsibilities outside its guarantee. Publish only allowlisted, de-identified derived data after a disclosure review; free text requires human review because it can contain indirect identifiers.

## Threat model

| Threat actor or failure | Asset at risk | Control | Residual risk |
|---|---|---|---|
| Curious local user | Participant privacy | Local-only default, separate mapping, least-privileged OS account, encrypted storage guidance | Device compromise can expose files. |
| Malicious local operator | Data integrity / chronology | Canonical SHA-256 receipt verification, protocol amendments, external storage of published roots if approved | Operator can rewrite records **and** receipts; no trusted timestamp in v0.1.0. |
| Accidental edit / corrupt copy | Integrity | Receipt checks and deterministic fixtures | Loss before receipt or intentional replacement not prevented. |
| External AI provider | Confidential content | No mandatory provider; model calls off by default; explicit consent and minimal task context when enabled | Provider retention/model drift beyond local control. |
| Rater | Condition/identity leakage | De-identify and randomize scoring packets; condition masking; separate identity map | Writing style/content may reveal identity or condition. |
| Researcher confirmation bias | Invalid inference | Preregistration, blind scoring, negative-result reporting, predeclared analyses | Preregistration cannot eliminate all interpretive bias. |
| Re-identification from export | Participant privacy | Export allowlist, small-cell suppression, review of free text, no identifier hashes | Sparse artifacts can remain identifiable. |
| Supply-chain compromise | System correctness | Standard-library baseline, pinned CI Python, no mandatory runtime dependencies, code review | OS/Python/GitHub Actions remain external dependencies. |
| Model drift / nondeterminism | Reproducibility | Record provider/model/version/settings/prompt template when used; do not claim deterministic replay | Hosted provider may alter behavior or omit full provenance. |

## Security controls

The proposed code must fail closed on unknown fields, unsupported schema versions, invalid timestamps/IDs, receipt mismatches, and invalid probability vectors. It must escape all dashboard text, avoid executing record content, and use no remote scripts, styles, images, or analytics. CI runs on fixed Python versions and only synthetic fixtures. Dependency additions require a threat-model update, lock policy, license review, and reproducibility rationale.

Cryptographic scope is deliberately limited. SHA-256 is used only for integrity comparison; no security claim is made about authentication. A future signed-receipt option would require explicitly specified key lifecycle, signer identity, revocation, and user-experience design. It is deferred because a superficial signature feature could create false audit assurances.

## Privacy-preserving research practices

Use an investigator-created opaque ID, not a derived identifier. Do not hash email addresses. Do not use chat history as a data source without a separate protocol and review. For EXP-003, participants should create a bounded study artifact rather than share a diary or commercially sensitive work. For EXP-004, provide the assistant only allowlisted engineering-state metadata; never include repositories, tickets, secrets, or proprietary source unless a specific approved study permits it.

The dashboard must present uncertainty, missingness, consent state, and integrity limits. It must not create behavioral incentives through badges, streaks, comparative rankings, productivity totals, or “drift” alerts. A participant can select `no_build`, and the system must preserve that choice as a valid outcome.

## Incident and withdrawal response

A live protocol must define a human-operated incident contact and a process to: pause collection; assess scope; notify affected parties and ethics bodies where required; revoke access; preserve minimal evidence of the incident; and document remediation. The software itself cannot guarantee notification, secure deletion, or legal compliance. A withdrawal event must stop future collection/analysis, invoke the approved data disposition, and record only the minimum necessary audit metadata.

## Pre-live-study checklist

| Check | Required evidence |
|---|---|
| Ethics authorization | Approval, exemption, or documented determination appropriate to jurisdiction. |
| Consent | Versioned plain-language document, capacity/age safeguards, contact route, withdrawal pathway. |
| Data inventory | Field-by-field necessity, sensitivity, location, retention, access owner, export rule. |
| Provider review | Model/service terms and data path documented; opt-out/local alternative evaluated. |
| Threat rehearsal | Tamper, mistaken export, withdrawal, lost-device, and rater-leakage tabletop exercise. |
| Measurement review | No diagnostic labels; no hidden behavioral targets; all safeguards and stop conditions predeclared. |

## References

[1]: https://www.hhs.gov/ohrp/regulations-and-policy/regulations/45-cfr-46/index.html "U.S. HHS 45 CFR 46, Protection of Human Subjects"
[2]: https://www.nist.gov/privacy-framework "NIST Privacy Framework"
[3]: https://doi.org/10.1136/amiajnl-2011-000089 "Automation bias review relevant to calibrated-reliance measurement"
