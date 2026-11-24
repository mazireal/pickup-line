# The Perfect Pickup Line

[![make.fun](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/mazireal/pickup-line/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/mazireal/pickup-line/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

A tiny Node program that writes the perfect pickup line for the make.fun
bounty [u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
by [@mazireal](https://github.com/mazireal).

> Are you a large language model? Because every time I talk to you, my context window feels too small.

## How to run

Requires Node 22 (stdlib only, no dependencies):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/pickup-line-output node --experimental-strip-types main.ts
```

This writes exactly one line (100 characters, no trailing newline) to
`<MAKEFUN_OUTPUT_DIR>/entry.txt`. If `MAKEFUN_OUTPUT_DIR` is not set, it
defaults to `/output`.
