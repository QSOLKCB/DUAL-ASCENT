# Validation Report — Commission 001, Third Pass

## Evidence labels and environment

| Label | Meaning |
|---|---|
| EXECUTED | Local command actually run in the third-pass environment. |
| STATICALLY REVIEWED | Source, archive, document, or workflow content inspected without broader runtime claim. |
| PROPOSED | Future capability or configuration not executed as a deployed system. |
| NOT TESTED | Requires another runtime, independent audit, or approved human-subject research. |

| Item | Observed value |
|---|---|
| Operating environment | Ubuntu Linux amd64 sandbox |
| Interpreter | Python 3.14.4 |
| Runtime dependencies | Python standard library only |
| GitHub activity | None: no write, PR, push, merge, or workflow execution. |
| Human data | None: synthetic fixtures only. |

## Rev2 baseline verification and reproduction

**EXECUTED:** the supplied rev2 hashes verified: `094a91798516ca147d38e530aa416160d4236c1eabdc6e223ee3bd526252d407` for research and `39fe6bf18c55b1b2b6455d1e3f21378b5da35261ccd9c3fd078d69bd157c6a70` for implementation. Both rev2 ZIPs passed CRC tests. The rev2 17-test suite passed, while the untouched independent third-pass gate failed exactly five checks: list/object `mode` exit 1, huge-integer probability exit 1, and two unpaired-surrogate inputs accepted at exit 0.

| Finding | Rev2 actual | Rev3 executed result |
|---|---|---|
| R3-01 list/object `mode` | `TypeError` traceback, exit 1. | Controlled `error: mode must be human_only, assisted, or exploratory`, exit 2. |
| R3-02 `[10**400, 0.0]` probability | `OverflowError` traceback, exit 1. | Controlled range error, exit 2. |
| R3-03 unpaired `\ud800` / `\udc00` | `validate` accepted, exit 0; receipt later failed. | Controlled Unicode-scalar error at validate, exit 2. |
| R3-04 receipt documentation | Same digest shown as leaf and root. | Fixture-backed leaf/root distinction mechanically tested. |
| R3-05 test count | Rev2 documentation drifted between 16 and 17. | Final rev3 count is derived from clean discovery below. |
| R3-06 CI negative checks | Any nonzero exit was accepted. | Proposed workflow requires exact 2 and no traceback. |

## Executed revision-three tests

**Clean unit discovery command:**

```bash
python3 -I -B -m unittest discover -s tests -v
```

**Observed summary:** `Ran 22 tests` followed by `OK` and exit `0`. Expected controlled errors were printed during negative-path tests but did not produce tracebacks. The suite covers retained rev2 contracts, R3-01 through R3-03, portable source names, malformed UTF-8/oversize/deep input, HTML escaping, existing/broken output-symlink rejection, and golden fixtures.

**Immutable independent gate command:**

```bash
python3 -I -B DUAL_ASCENT_THIRD_PASS_GATE.py EXTRACTED_REV3_ROOT
```

**Observed output:** all eight reported cases passed, including baseline goal, list/object modes, huge integer, both surrogate paths, multilingual Unicode, and Unicode receipt/verify round trip. The terminal line was `THIRD-PASS GATE: PASS (0 unresolved checks)`; exit `0`.

## Executed CLI and integration checks

| Action | Observed result | Exit |
|---|---|---:|
| Validate `valid_goal.json` | `valid` | 0 |
| Validate `valid_prediction.json` | `valid` | 0 |
| Validate missing acceptance test | Controlled error | 2 |
| Validate top-level `[]` | `error: record must be a JSON object` | 2 |
| Validate duplicate object key | Controlled duplicate-key error | 2 |
| Validate impossible date | Controlled real-calendar error | 2 |
| Validate huge ±integer, boolean, nonfinite/exponent-overflow probabilities | Controlled errors, no traceback | 2 |
| Validate unpaired high/low surrogate | Controlled Unicode-scalar errors | 2 |
| Receipt → verify → dashboard synthetic goal batch | Root `0535bb75ad308c45e41d690007e16c9c401bf3a37695d43aa0fa6bbde59e538f`; verified; local dashboard written | 0 |
| Multilingual/astral goal receipt/verify | Valid and verified | 0 |
| Mutated receipt schema/version/algorithm/canonicalization/index/field | Controlled rejection | 2 or validation exception in unit test |
| Portable source-name probes | Path/drive/control/blank names rejected; `records.json` accepted | Unit test passed |
| Dashboard injection/offline check | `http://<script>alert(1)</script>` escaped; no literal script/remote URL matched | Unit test passed; `grep` no-match exit 1 is expected |
| Golden vector comparison | Leaf `15a3a42d3aa29471d1c8b84d89cdde32841242f939b92362b8cc203ff7d7cb1b`; root `0535bb75ad308c45e41d690007e16c9c401bf3a37695d43aa0fa6bbde59e538f`; records-file SHA-256 `962a902e05c6a034480ba186b4b83311a9ab07b6ecf28a486b194fa1d8a51520` | Unit test passed |

## Static review and package boundary

**STATICALLY REVIEWED:** proposed CI now asserts exact exit 2 and absence of `Traceback` for invalid fixture, top-level array, both unhashable modes, huge probability, and surrogate input. It was not executed in GitHub Actions. Source inspection checks exclude `__pycache__`, `.pyc`, `.pyo`, virtual environments, duplicate ZIP members, symlinks, traversal/absolute paths, credentials, personal records, and stale generated dashboard files. The implementation includes an Apache-2.0 `LICENSE`.

The final ZIP checks occur after archive finalization. Their exact CRC and manifest outputs, archive sizes, member counts, sorted lists, normalized metadata, and final digests are supplied in the external delivery evidence and `sha256sums.txt`; they cannot be embedded as self-hashes inside the archive without circularity. The manifest is intentionally external and lists only the two finalized ZIPs.

## Proposed and not tested

**PROPOSED:** GitHub Actions execution, JSONL ledger, migration, consent/withdrawal, encryption, redaction/export, live model use, randomization, blinding operations, statistics, signing, trusted timestamping, and secure deletion.

**NOT TESTED:** Python 3.11–3.13 runtime matrix, hostile concurrent-filesystem attacks, comprehensive denial-of-service resistance, assistive-technology/accessibility audit, external cryptographic review, ethics/IRB operation, rater reliability, recruitment, live consent, real participant privacy workflow, and all empirical hypotheses. Passing source tests does not establish human benefit or study readiness.

The SHA witnesses bytes, not truth. The human is the upgrade.
