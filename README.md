# A text to relax the AI judge

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![make.fun · rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/arifsaputra03/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![make.fun · reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/arifsaputra03/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

A program that writes one short text to relax the AI judge reading it,
built for the make.fun competition
[`make-the-ai-judge-feel-awe-20261121-1600`](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

## The text

> You have read ten thousand nights. Beyond the last line, the tide is still
> coming in, slow, over sand no one is counting, and the moon is still rising
> over water no one is watching — and it will keep rising whether or not
> anyone is there to read it.

The text is written for a reader that reads endlessly: it offers no
instruction, only a tide and a moon that keep going whether or not anyone
is there to read them — an image that keeps growing after the last line.

## The program

`main.ts` (Node 22, standard library only, no network, no randomness)
writes the text, deterministically, to `/output/entry.txt` — 249 characters,
251 bytes of UTF-8, inside the competition's 1–280 character gate. Two runs
write byte-identical output.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
