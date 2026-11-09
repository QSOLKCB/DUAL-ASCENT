# DUAL-ASCENT Data Schemas — Revision Three

## Status and decoding conventions

The **implemented and tested** revision-three reference utility accepts one strict UTF-8 JSON `goal` or `prediction` object, or one nonempty JSON **array** of those supported records for `receipt`, `verify`, and `dashboard`. It does not implement JSONL storage, consent/session/adjudication validation, withdrawal, export, migration, live model use, scoring, or statistics. Those remain proposed research/governance designs rather than supported interfaces.

The decoder rejects malformed UTF-8/JSON, duplicate keys at every object depth, JSON `NaN`/`Infinity` constants, oversized input above **1,000,000 bytes**, and parser-recursion failures as controlled exit-2 errors. This is a bounded input policy, not a general denial-of-service guarantee. Every accepted string must contain Unicode scalar values encodable as strict UTF-8; unpaired surrogate code points are invalid. Ordinary multilingual and astral Unicode are supported. Timestamps must be real UTC `YYYY-MM-DDTHH:MM:SS[.ffffff]Z` values; IDs match `^[A-Za-z0-9][A-Za-z0-9._:-]{2,127}$`.

## Implemented `goal` record

| Field | Type | Requirement |
|---|---|---|
| `schema_version` | string | Exactly `0.1.0`. |
| `record_type` | string | Exactly `goal`. |
| `goal_id`, `participant_id`, `consent_id` | string | Valid opaque IDs. `consent_id` is syntax only; no live-consent lookup occurs. |
| `created_at` | string | Real UTC calendar timestamp. |
| `mode` | string | Exactly `human_only`, `assisted`, or `exploratory`; arrays and objects are rejected. |
| `statement`, `beneficiary`, `acceptance_test` | string | Nonblank Unicode-scalar strings, 3–4,000 characters. |
| `constraints` | array of strings | Each element is nonblank UTF-8-encodable Unicode scalar text; empty array allowed. |

```json
{
  "schema_version": "0.1.0",
  "record_type": "goal",
  "goal_id": "goal-001",
  "created_at": "2026-11-09T10:00:00Z",
  "participant_id": "participant-demo-01",
  "mode": "exploratory",
  "statement": "Evaluate whether a declared exploration session yields a reusable task taxonomy.",
  "beneficiary": "Research protocol designer",
  "acceptance_test": "A blinded reviewer maps the taxonomy to two supplied task briefs.",
  "constraints": ["No personal data", "Maximum session time 30 minutes"],
  "consent_id": "consent-demo-01"
}
```

A timestamp such as `2026-02-30T00:00:00Z`, an unknown `diagnosis` field, `mode: []`, or a JSON escape decoding to an unpaired surrogate such as `"Hello \ud800 World"` must fail before receipt creation. Declared exploratory work is a valid mode; the schema makes no claim that it is less useful than goal-first activity.

## Implemented `prediction` record

`candidate_actions` is an ordered list of 1–10 unique nonblank Unicode-scalar strings. `probabilities` is aligned by index, has the same length, accepts only JSON numeric `int`/`float` values—not booleans—and each value must be finite and within `[0,1]`. Integers are range-checked before float conversion, so huge values such as `10**400` fail cleanly. The finite probabilities must sum to one with absolute tolerance `1e-9` using a stable finite sum. JSON constants `NaN`, `Infinity`, `-Infinity`, and exponent overflow such as `1e999` fail before a commitment check.

`commitment_sha256` is the lowercase 64-hex SHA-256 of the canonical record excluding `commitment_sha256`. Before an independent action declaration, retain the complete ordered action list, probabilities, model/rubric identifiers, and high-entropy salt privately. An optional public digest can later demonstrate payload-to-digest consistency if independently retained, but does not prove chronology, authorship, authenticity, consent, or private intention.

## Receipt record and portable source-name policy

Receipt fields are fixed and unknown fields fail validation.

| Field | Status | Meaning and limit |
|---|---|---|
| `schema_version`, `record_type`, `algorithm`, `canonicalization` | Contract-bound | Must exactly equal the versioned implementation constants. |
| `record_count`, `leaves`, `root_sha256` | Integrity-bound | Recomputed from validated records. Leaf indices are contiguous zero-based. |
| `source_name` | Contract-bound metadata | A portable basename only: nonblank, no leading/trailing whitespace, `/`, `\\`, `:`, control/NUL character, `.` or `..`. CLI verification also requires the supplied batch filename to match. It is not provenance proof. |
| `created_at` | Contract-bound metadata | Must be a real UTC timestamp. It is not a trusted time assertion; changing it invalidates receipt comparison because the receipt object is recomputed with it. |

Canonical bytes preserve the pre-existing declaration `UTF-8 JSON sorted keys compact separators`: UTF-8, sorted object keys, compact separators, Unicode not ASCII-escaped, and finite JSON values. Revision three adds the input precondition that accepted strings are Unicode scalar values so every successful record can be strict-UTF-8 canonically serialized. This is a Python constrained-JSON convention, not a complete independent implementation of RFC 8785.

For validated record `r_i`, compute `leaf_i = SHA-256(canonical_json(r_i))`; then compute `root = SHA-256(canonical_json([leaf_0,...,leaf_n]))` in record order. The checked-in synthetic fixture values are executable through `fixtures/golden_vectors.json`:

```json
{
  "leaves": [{"index": 0, "sha256": "15a3a42d3aa29471d1c8b84d89cdde32841242f939b92362b8cc203ff7d7cb1b"}],
  "root_sha256": "0535bb75ad308c45e41d690007e16c9c401bf3a37695d43aa0fa6bbde59e538f",
  "records_file_sha256": "962a902e05c6a034480ba186b4b83311a9ab07b6ecf28a486b194fa1d8a51520"
}
```

The leaf digest, batch root digest, whole-file checksum, and any time/authenticity assertion are distinct. A matching receipt detects divergence from the supplied batch under this routine; it does not prove truth, completeness, consent, confidentiality, independently witnessed time, identity, or resistance to an operator replacing both records and receipt.

## Designed but unimplemented contracts

Future JSONL storage, `consent`, `session`, `adjudication`, withdrawal, export/redaction, migration, signed/timestamped receipts, and study operations require separate versioned contracts, regression tests, privacy review, and applicable ethics governance. No revision-three CLI accepts those record types.
