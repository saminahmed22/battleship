# Battleship

A classic two-player guessing game where each player secretly places ships on a grid and takes turns calling out coordinates to try and sink the opponent's fleet.

**Rules:**

- Each player has a 10x10 grid board and an identical fleet of ships.
- Fleet includes:

  - 1 Carrier (5 blocks)
  - 1 Battleship (4 blocks)
  - 1 Cruiser (3 blocks)
  - 1 Submarine (3 blocks)
  - 1 Destroyer (2 blocks)

- Ships can be placed horizontally or vertically, not diagonally.
- Ships cannot overlap or extend beyond the grid.
- Players take turns calling out(clicking) specific coordinates(blocks) (e.g., B5) to attack.
- The game will respond with a hit or miss feedback on the board. If hit, player will get another chance to callout and will do so until they miss.
- If all the blocks of a ship are hit, it is declared "sunk".
- The first player to sink all of the opponent’s ships wins.
