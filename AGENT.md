# AGENT.md — build notes

## Chosen word
`queue`

## Duel results
- vs "colonel": won 2-0, margins 2+2.
- vs "monosyllabic": split 1-1, decided on the instant-read criterion. "queue" lands instantly, while "monosyllabic" needs a half-beat to count syllables.
- vs "monday" (calibration): won 2-0, margins 4+4.

## Judge criteria (in order)
1. C1 real word
2. C2 instant
3. C3 humour in the word itself
4. C4 fresh
5. C5 exact one word

## Gate
UTF-8 text of 1 to 77 characters, not only whitespace.

## Verify locally
```
node main.ts
wc -c /output/entry.txt   # should read 5
```
The file holds exactly `queue`, with no trailing newline.
