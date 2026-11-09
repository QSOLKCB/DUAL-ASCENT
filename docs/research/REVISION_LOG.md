# Revision Log — Commission 001, Third Pass

## Continuity

Revision three is a targeted remediation of the supplied revision-two artifacts, not a new research exercise. It preserves the independent research recommendation **REVISE**, manual-pilot-first decision, neutral treatment of declared exploration, no-composite-human-score rule, and separation among executed source tests, static review, referenced evidence, and untested human research. No GitHub write, pull request, merge, live deployment, or participant-data activity occurred.

Revision-two corrections remain in force: real timestamp validation; strict top-level/batch validation; duplicate-key/non-finite rejection; receipt version/type/algorithm/canonicalization/index checks; unknown-field batch rejection; source-cache removal; exact ZIP naming; JSON-array versus future JSONL clarification; and limits on SHA-256 commitment claims.

## Revision-three changes

| Change | Reason | Evidence status |
|---|---|---|
| Type-check `goal.mode` before set membership. | Rev2 accepted unhashable value into a set-membership operation and crashed. | EXECUTED list/object exit-2 regressions and immutable gate. |
| Range-check integer probabilities before finite conversion. | Rev2 converted huge JSON integers to float inside `math.isfinite` and crashed. | EXECUTED huge positive/negative, boolean, nonfinite, exponent-overflow, bounds, length, and boundary tests. |
| Require strict UTF-8 Unicode scalar strings at validation. | Rev2 could accept unpaired surrogates in `validate` that failed later in receipt canonicalization. | EXECUTED surrogate rejection and multilingual/astral receipt round trip. |
| Add portable source-basename contract. | Host-platform `PurePath` behavior was inadequate for Windows-like paths under Linux. | EXECUTED slash/backslash/drive/control/blank rejection test. |
| Add bounded input and controlled decoding paths. | Parser review required controlled behavior for malformed encodings, deep inputs, and oversize input. | EXECUTED malformed UTF-8, nested duplicate, deep nonobject, and >1 MB input tests; not a full DoS proof. |
| Harden local output write. | Output collision/symlink review required a minimal safe-write check. | EXECUTED HTML escaping and existing-symlink rejection; same-directory temporary replacement. |
| Add golden vectors and corrected receipt example. | Rev2 documentation confused one-record leaf and root digests. | EXECUTED fixture/vector receipt equality check; schema now lists correct distinct values. |
| Add Apache-2.0 `LICENSE`. | A pyproject metadata string alone was insufficient distribution notice. | STATICALLY REVIEWED archive member. |
| Require exact exit 2 and no traceback in proposed CI. | Rev2 CI treated any nonzero exit—including a crash—as pass. | STATICALLY REVIEWED YAML; local tests/gate executed; GitHub Actions not run. |
| Reconcile revision/test terminology. | Rev2 documentation had a 16/17-test count inconsistency. | Final count is mechanically recorded only after final clean discovery in `VALIDATION_REPORT.md`. |

## Unchanged research-evidence classifications

No source was silently upgraded. The evidence register retains its distinctions: accessible primary/full-text material remains as previously labeled; the Shen and Tamkin item remains a preprint with stated caveat; Kazemitabaar et al. remains metadata/publisher-record only for this commission; and Brad the Dad’s video remains qualitative personal testimony, not clinical, diagnostic, or causal evidence. The supplied addendum’s unverified references remain excluded from substantive empirical synthesis.

## Remaining uncertainty and release boundary

Revision-three source success does not establish human benefit, retention/transfer, agency, creativity, prospective-intention validity, ethics compliance, security under adversarial operation, or reliable study instrumentation. Cross-version test execution for Python 3.11–3.13, GitHub Actions, hostile-filesystem concurrency, accessibility assessment, signing/trusted timestamping, consent/withdrawal workflow, blinded rating, and empirical study protocols remain unexecuted.

The next action remains independent review followed, if accepted, by a documentation-only PR—not an implementation PR or human study.
