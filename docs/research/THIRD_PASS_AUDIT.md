# Third-Pass Audit — Rev2 Adversarial Findings and Rev3 Closure

## Scope and decision boundary

This targeted third pass used the supplied rev2 research ZIP, implementation ZIP, independent audit, and immutable executable gate. It did not restart the literature review, modify GitHub, create a pull request, collect human data, or claim a human outcome. The research recommendation remains **REVISE** with an ethics-appropriate manual EXP-002 pilot as the smallest useful next step.

## Rev2 input integrity and independent reproduction

**EXECUTED:** the supplied rev2 manifest verified both supplied archives: research `094a91798516ca147d38e530aa416160d4236c1eabdc6e223ee3bd526252d407` and implementation `39fe6bf18c55b1b2b6455d1e3f21378b5da35261ccd9c3fd078d69bd157c6a70`. Both passed `unzip -t`. The rev2 suite reported 17 tests passing under this third-pass Python 3.14.4 environment. The supplied immutable gate then failed exactly five cases: array/object `mode` exit 1, huge-integer probability exit 1, and two unpaired-surrogate inputs accepted at exit 0.

## Confirmed findings and closure

| ID | Rev2 minimal reproduction and actual result | Rev3 change and attribution | Dedicated regression / executed result | Closure |
|---|---|---|---|---|
| R3-01 | Replace valid goal `mode` with `[]` or `{}`; `validate` raised `TypeError` at `validate_goal` set membership, traceback/exit 1. | `validate_goal` now tests `isinstance(mode, str)` before membership. | `test_r3_01_unhashable_goal_modes_are_controlled`; list and object each return controlled exit 2. | Closed. |
| R3-02 | Replace valid prediction probabilities with `[10**400, 0.0]`; `math.isfinite` in `validate_prediction` raised `OverflowError`, exit 1. | `_validate_probability` type/range-checks integers before finite conversion; finite float checks remain explicit; `math.fsum` preserves the existing `1e-9` tolerance. | `test_r3_02_probability_bounds_and_overflow_are_controlled`; huge positive/negative integers, booleans, `NaN`, `Infinity`, `-Infinity`, `1e999`, bad ranges/lengths reject with exit 2; `[0,1]` and `[1.0,0.0]` validate. | Closed. |
| R3-03 | Use `"Hello \ud800 World"` or `"bad \udc00 data"`; `validate` returned 0, while receipt later failed UTF-8 serialization. | `require_unicode_scalar` now requires strict UTF-8 encodability for every accepted string/object key, and record validators apply it to dynamic string fields. | `test_r3_03_surrogates_fail_validate_and_scalar_unicode_roundtrips`; both surrogates return exit 2; multilingual astral text validates and receipt/verify round trip succeeds. | Closed. |
| R3-04 | Rev2 `DATA_SCHEMAS.md` used the root digest as both one-record leaf and root. | Schema example now cites fixture-backed golden vectors. `fixtures/golden_vectors.json` and its test mechanically compare `records.json`, `receipt.json`, leaf, root, and raw-file checksum. | `test_golden_fixture_vectors_and_receipt_example_values` passed. Leaf `15a3a42d3aa29471d1c8b84d89cdde32841242f939b92362b8cc203ff7d7cb1b`; root `0535bb75ad308c45e41d690007e16c9c401bf3a37695d43aa0fa6bbde59e538f`. | Closed. |
| R3-05 | Rev2 plan stated 16 tests while suite/report stated 17. | Rev3 documents derive the final observed count from `unittest` discovery rather than repeating rev2 prose. | Clean final run count is recorded in `VALIDATION_REPORT.md`; no document claims 16 or 17 as rev3 count. | Closed after final run. |
| R3-06 | Rev2 workflow accepted every nonzero negative command, including crashes. | Proposed CI uses `expect_exit_2`, rejects any status other than 2, and rejects `Traceback`; it includes invalid fixture plus R3-01/R3-02/R3-03 cases. | YAML statically reviewed; source suite and gate executed locally. GitHub Actions itself was not run. | Closed as configuration; CI runtime remains unobserved. |

## Additional adversarial review

| Area | Result and status |
|---|---|
| Portable basename | **EXECUTED.** `require_source_name` rejects `..`, `../x`, slash/backslash paths, drive-like `C:\\folder\\x.json`, NUL/control characters, whitespace-only and leading/trailing whitespace. It accepts `records.json`. This is a deliberately portable policy rather than host-OS `PurePath` semantics. |
| Parser robustness | **EXECUTED.** Nested duplicate keys, malformed UTF-8, oversized input, `NaN`/infinite values, and deep nonobject input returned controlled errors in tests. **NOT TESTED:** adversarial resource exhaustion below the byte cap and all parser implementation limits. |
| Receipt metadata | **EXECUTED/STATICALLY REVIEWED.** Library verification recomputes using a receipt’s `created_at`/`source_name`; a metadata mutation therefore fails comparison unless all integrity fields are recomputed. CLI additionally binds `source_name` to the input filename. Neither field is independently authenticated or time-attested. |
| Dashboard/output | **EXECUTED.** Dynamic goal fields are HTML-escaped; no remote URL or literal injected script was present. Existing output symlinks are rejected and writes are same-directory temporary-file replacements. **NOT TESTED:** hostile concurrent filesystem attackers and assistive-technology audit. |
| Canonicalization | **EXECUTED.** Key-order, fixture leaf/root, raw-file checksum, scalar Unicode, and finite numeric paths are covered. It is a Python constrained JSON convention, not full RFC 8785 interoperability. |
| License | **STATICALLY REVIEWED.** Rev3 implementation includes standalone Apache-2.0 `LICENSE` plus pyproject metadata. |
| Research accuracy | **STATICALLY REVIEWED.** No new empirical conclusion was added. Evidence statuses remain unchanged: primary-study/full-text claims, preprint caveats, metadata-only material, and personal testimony remain labeled as before. |
| Portability | **EXECUTED:** Python 3.14.4. **NOT TESTED:** Python 3.11–3.13 in this environment. Declared lower bound remains Python 3.11; proposed CI targets Python 3.12 only and is not observed execution. |

## Outstanding findings

The corrections make the small reference utility stricter, not study-ready. The input limit is not a comprehensive denial-of-service defense; receipt hashes lack a trusted time/authenticity anchor; atomic replacement is not a full hostile-filesystem guarantee; no cross-interpreter matrix was executed; CI configuration has not run in GitHub; and no accessibility, consent, withdrawal, privacy-operation, rater, or human-subject research test occurred. These are reasons to retain **REVISE**, manual-pilot-first, and documentation-only-PR boundaries.

The SHA witnesses bytes, not truth. The human is the upgrade.
