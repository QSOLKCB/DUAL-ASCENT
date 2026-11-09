# DUAL-ASCENT v0.1.0-rev3 Implementation Specification

## Status and boundary

This is a proposed offline-first research-protocol utility. It is not a claim about the public repository, a completed human study, or improved human capability. The decision remains **REVISE**: retain documentation-first work and require an ethics-appropriate manual EXP-002 pilot before any broader implementation decision.

Revision three implements a small local subset: strict validation of `goal` and `prediction` JSON objects; nonempty JSON-array batch receipt/verification; fixture-backed canonical SHA-256 vectors; and static no-network dashboard output. It is not behavioral surveillance, a diagnostic instrument, an autonomy/creativity score, an AI coach, hosted service, model integration, or a live-study platform.

| Capability | Rev3 status | Evidence |
|---|---|---|
| One strict UTF-8 `goal`/`prediction` object | Implemented. | Executed synthetic tests and immutable third-pass gate. |
| JSON-array receipt/verify/dashboard | Implemented. | Executed synthetic round trips. |
| Duplicate/nonfinite/unpaired-surrogate/oversize rejection | Implemented. | Executed regressions. |
| Calendar, probability, and portable source-name constraints | Implemented. | Executed regressions. |
| Escaped static HTML and local atomic output | Implemented in bounded reference form. | Executed synthetic injection/symlink checks. |
| JSONL, consent, withdrawal, encryption, export, statistics, model calls | Proposed only. | Not tested / not implemented. |
| Human learning, transfer, agency, creativity, prediction validity | Requires approved empirical research. | Not tested. |

The supported v0.1.0-rev3 batch interface is a JSON **array**, not JSONL. JSONL remains a future design option requiring distinct append, locking, migration, tests, and privacy review.

## Strict decoding and records

The decoder accepts strict UTF-8 JSON at or below 1,000,000 bytes. It rejects duplicate object keys at all depths, JSON nonfinite constants, malformed encodings/syntax, parser-recursion failure, and unsupported top-level shapes as controlled errors. Accepted strings must be Unicode scalar values encodable by strict UTF-8: an unpaired high/low surrogate is rejected during `validate`, so successful validation is compatible with receipt canonicalization. This bound reduces routine failures but is not a comprehensive resource-exhaustion defense.

`goal.mode` is explicitly required to be a string before membership testing. `prediction` candidate actions are nonblank unique scalar strings. Probabilities are aligned finite JSON numeric values in `[0,1]`; booleans are rejected. Integer probabilities receive exact range checks before any float conversion, preventing huge-integer overflow. The sum rule remains absolute tolerance `1e-9`.

## Receipt and metadata semantics

1. Validate all records before any digest calculation.
2. Canonicalize with UTF-8, sorted keys, compact separators, preserved Unicode, and finite values.
3. Compute `leaf_i = SHA-256(canonical_json(record_i))` in array order.
4. Compute `root = SHA-256(canonical_json([leaf_0,...,leaf_n]))`.
5. Write a receipt with fixed fields only.
6. Verify version/type/algorithm/canonicalization/count/indices/digests and recomputed leaves/root.

The canonicalization declaration remains `UTF-8 JSON sorted keys compact separators`; revision three adds a stricter input precondition rather than silently changing the versioned receipt format. It is a Python constrained convention, not a complete RFC 8785 implementation.

`source_name` is a portable basename: no slash, backslash, colon/drive syntax, control/NUL, leading/trailing whitespace, `.` or `..`. The CLI also requires it to equal the input batch filename. `created_at` and `source_name` are receipt-bound metadata, but no independent time, author, provenance, identity, consent, truth, or chronology proof. A library caller can produce a new valid receipt by recomputing all fields with changed metadata; the CLI rejects a filename mismatch. SHA-256 is an integrity witness for presented bytes, not authenticity.

## Output behavior

Dashboard generation occurs only after receipt verification. Dynamic goal fields are HTML-escaped. The document contains no remote URL, script, font import, telemetry, account, model call, score, leaderboard, or diagnostic label. Output writes use a same-directory temporary file followed by replacement; existing destination symlinks are rejected. This is a bounded local safeguard, not a complete defense against hostile concurrent filesystem operations.

## CLI and execution contract

| Command | Supported input | Exit behavior |
|---|---|---|
| `validate RECORD.json` | One valid `goal` or `prediction`. | `0` + `valid`; malformed/contract failure `2`, without traceback. |
| `receipt RECORDS.json --output RECEIPT.json` | Nonempty valid array. | `0` root printed; controlled error `2`. |
| `verify RECORDS.json RECEIPT.json` | Valid array and matching strict receipt. | `0` + `verified`; controlled error `2`. |
| `dashboard RECORDS.json RECEIPT.json --output DASHBOARD.html` | Same as verify. | Verifies before write; `0` success, `2` controlled error. |

```bash
cd DUAL_ASCENT_PROPOSED_IMPLEMENTATION_rev3
python3 -I -B -m unittest discover -s tests -v
python3 -I -B dual_ascent.py validate fixtures/valid_goal.json
python3 -I -B dual_ascent.py validate fixtures/valid_prediction.json
python3 -I -B dual_ascent.py receipt fixtures/records.json --output /tmp/receipt.json
python3 -I -B dual_ascent.py verify fixtures/records.json /tmp/receipt.json
python3 -I -B dual_ascent.py dashboard fixtures/records.json /tmp/receipt.json --output /tmp/dashboard.html
```

The independent gate is run externally as `python3 -I -B DUAL_ASCENT_THIRD_PASS_GATE.py EXTRACTED_ROOT`; it must report all cases passing. The proposed CI requires exact negative exit `2` and no `Traceback`. It was statically reviewed, not run on GitHub Actions.

## Golden vectors and release boundary

`fixtures/golden_vectors.json` is executed by the unit suite. For `fixtures/records.json`, the leaf is `15a3a42d3aa29471d1c8b84d89cdde32841242f939b92362b8cc203ff7d7cb1b`, root is `0535bb75ad308c45e41d690007e16c9c401bf3a37695d43aa0fa6bbde59e538f`, and raw records-file SHA-256 is `962a902e05c6a034480ba186b4b83311a9ab07b6ecf28a486b194fa1d8a51520`.

The implementation archive includes clean source, fixtures, standard-library tests, proposed workflow, README, and Apache-2.0 license. It must not be committed by a future documentation-only PR. Before participant work, retain the existing gates: named decision owner, manual-protocol comparison, ethics/IRB determination, consent/retention/withdrawal review, preregistration, blinded scoring plan, and pilot feasibility. Source tests do not substitute for these conditions.
