# Rock Paper Scissors - by KGcitiZen

The UI was taken and inspired from Facundo Cabanne's figma design, available at the [link](https://www.figma.com/community/file/1261148683621068639).

This is one of my first projects, so the app is not responsive and adaptive. It's best if your screen `width` is `1920px`.

## Rules

1. Rock crushes Scissors
2. Scissors cuts Paper
3. Paper covers Rock

The game is played between you and the AI. You need to choose one of the three options: Rock, Paper, or Scissors. Simultaneously the AI will randomly choose its own option.

he winner of each round is determined based on the interactions of their choices as described above. The game continues for a predetermined number of rounds (5), and the player with the most wins at the end is declared the overall winner. In case of a tie, the round is usually replayed until there is a clear winner.

### P.S.

To keep track of the score, I've used `sessionStorage` so that refreshing the page won't erase your progress.
