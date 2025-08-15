export class GameBoard {
  constructor() {
    this.occupiedCells = {};
    this.missedCells = [];
  }

  getPossibleCells(ship, pos) {
    const size = ship.size;
    const axis = ship.axis;

    const shipCenter =
      size % 2 === 0 ? Math.ceil((size - 1) / 2) : Math.ceil(size / 2);

    let shipHeadSize = shipCenter - 1;
    let shipTailSize = size - shipCenter;

    const head = pos.slice();
    const tail = pos.slice();

    let renderedShipSize = size - 1;

    while (renderedShipSize) {
      // Calculating the head
      while (shipHeadSize) {
        const newHead = axis === "X" ? head[0] + 1 : head[1] + 1;
        if (newHead > 10) {
          shipTailSize += shipHeadSize;
          shipHeadSize = 0;
          break;
        }
        axis === "X" ? head[0]++ : head[1]++;
        shipHeadSize -= 1;
        renderedShipSize -= 1;
      }

      // Calculating the tail
      while (shipTailSize) {
        const newTail = axis === "X" ? tail[0] - 1 : tail[1] - 1;

        if (newTail < 1) {
          shipHeadSize += shipTailSize;
          shipTailSize = 0;
          break;
        }
        axis === "X" ? tail[0]-- : tail[1]--;
        shipTailSize -= 1;
        renderedShipSize -= 1;
      }
    }

    // Calculating the occupied cells
    const cells = [];
    while (axis === "X" ? tail[0] <= head[0] : tail[1] <= head[1]) {
      cells.push(tail.slice());
      axis === "X" ? tail[0]++ : tail[1]++;
    }

    return cells;
  }

  placeShip(cells, ship) {
    cells.forEach((cell) => {
      this.occupiedCells[cell] = ship;
    });
  }

  receiveAttack(pos) {
    const ship = this.occupiedCells[pos];

    if (ship) {
      !ship.checkSunk() ? ship.incrementHit() : 0;
      return ship.hit;
    } else {
      this.missedCells.push(pos);
      return this.missedCells[0];
    }
  }

  //no use, remove later
  has(parentArr, target) {
    for (let i = 0; i < parentArr.length; i++) {
      if (JSON.stringify(parentArr[i]) === JSON.stringify(target)) {
        return [true, i];
      }
    }
    return [false, 0];
  }

  hasAllSunked() {
    for (const cell in this.occupiedCells) {
      if (!this.occupiedCells[cell].checkSunk()) {
        return false;
      }
    }
    return true;
  }
}
