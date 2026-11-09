# EXP-002 — Proposed scoring and input-contract amendment

**Change request:** `EXP002-RUBRIC-CR-001`. **State:** PROPOSED, not adopted.  
**Supersession:** None. The source [DRAFT-0.1 rubric](../EXP-002_SCORING.md) remains authoritative for existing synthetic documentation until an independent measurement reviewer approves a versioned amendment.

## Confirmed ambiguity: wholly missing versus submitted but unusable

Source scoring table currently uses `C = 0` for "Missing/unusable response", while source missingness guidance says a completely absent artifact must remain `NOT_SCORED` with blank C/R/E. The two clauses can cause fabricated outcomes if someone assigns zero to a missing follow-up.

**Proposed replacement for the C=0 anchor:** "A response was **submitted** but is unusable for the defined task, or makes no valid attempt." The other C anchors stay unchanged pending review.

**Precedence proposal:**

| Status | Scored? | C/R/E | Reason |
|---|---|---|---|
| `SUBMITTED` and usable | Yes, per locked scoring anchors | Integers 0–4 separately | Actual artifact and explanation exist |
| `SUBMITTED` but unusable | Yes, if the preregistered rubric allows | C=0 may be appropriate; R/E scored on available evidence | Distinguish lack of successful output from missing data |
| `FOLLOWUP_MISSING` | **No** | All blank | Never convert missingness to zero post hoc |
| `WITHDRAWN` | **No** | All blank, subject to approved data-disposition rules | Never infer performance from withdrawal |
| `TECHNICAL_FAILURE` without evaluable submission | **No** | All blank; track missingness reason | Do not turn tool failure into poor learner performance |

The proposed change must be accepted **prospectively**. Do not rewrite previous scored records or claim it is validated.

## Scoring and artifact ambiguity — explicit decision request

- Define when the program receives a correctness score versus when the code is executed on a fixed test set; human explanation is a separate criterion.
- Missing required header: a deliberate, described `ValueError` is different from an accidental `KeyError`/crash. Have reviewers determine whether/where that distinction belongs in C or R.
- Publish an **objective, bounded input contract** *before* creating hidden test forms. The public task does not currently specify a maximum number of ASCII digits; Python's integer string conversion limit can reject a 5,000-digit quantity.
- A candidate bound for **future** synthetic trials is at most **32 ASCII digits per numeric field**, with row count and total input bytes separately bounded. This is a **design candidate**, not a live protocol value. Confirm that a quantity such as `0000` is accepted, that `-1`, whitespace padding and non-ASCII digits are rejected, and that malformed rows are treated consistently.
- The existing public response examples and their outputs must **not** be reused as a hidden participant assessment. Freeze parallel practice/immediate/delayed tasks only after independent validation.

## Review decision (blank)

| Question | Reviewer conclusion |
|---|---|
| Should missing and withdrawn results remain entirely unscored? | **PENDING** |
| Is the proposed C=0 wording unambiguous? | **PENDING** |
| Are C/R/E criterion anchors separable and reproducible? | **PENDING** |
| Is a 32-digit candidate field bound appropriate, or must it be changed? | **PENDING** |
| How are deliberate versus accidental exceptions graded? | **PENDING** |
| Are method-specific adjudication and rater-agreement thresholds prespecified? | **PENDING** |

**DO NOT EDIT THE CURRENT LOCKED ASSESSMENT RETROACTIVELY.** If approved, issue `DRAFT-0.2` with an amendment effective date, scope and rubric hash and record all unresolved points.

## Evidence basis

The existing [Phase 1C executed synthetic matrix](../calibration-003/RESULTS.md) is sufficient to demonstrate these code-path and rubric *risks*. It does not establish a scoring distribution, reliability, sample-size justification or human-learning effect.
