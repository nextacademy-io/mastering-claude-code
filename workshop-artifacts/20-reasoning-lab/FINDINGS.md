# Reasoning lab — the four bugs in `review.ts`

Open the box only after both runs. Score each run against these four. Anything else a run
reports is a false positive, unless it is one of these four worded differently.

<details>
<summary>The four bugs (open after both runs)</summary>

| # | Line | Bug | Contract it breaks |
|---|---|---|---|
| 1 | 16 | `if (clash.cancelled) return true;` lets anyone join a cancelled clash | cancelled clashes cannot be joined |
| 2 | 18 | `clash.capacity ?? 0` turns "unlimited" into a capacity of zero | null capacity means unlimited |
| 3 | 19 | `>` instead of `>=`: a clash at capacity still accepts one more | a clash is full when `participantIds.length >= capacity` |
| 4 | 21 | `clash.participantIds.sort()` sorts the caller's array in place | this check must not mutate its input |

A finding counts as correct when it names the line or the behaviour and says what goes wrong.

</details>
