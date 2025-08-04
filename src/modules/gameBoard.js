export class GameBoard {
  constructor() {
    this.occupiedCells = {};
    this.missedCells = [];
  }

  placeShip(ship, pos) {
    const size = ship.size;
    const axis = ship.axis;

    const shipHead = Math.floor(size / 2);
    const shipTail = Math.ceil(size / 2);

    const head = pos.slice();
    const tail = pos.slice();

    // watch for overflow or overlap, not implemented yet
    // Calculating the head
    for (let i = 1; i < shipHead; i++) {
      axis === "X" ? head[0]++ : head[1]++;
    }

    // Calculating the tail
    for (let i = 0; i < shipTail; i++) {
      axis === "X" ? tail[0]-- : tail[1]--;
    }

    // Calculating the occupied cells
    const cells = [];
    while (axis === "X" ? tail[0] <= head[0] : tail[1] <= head[1]) {
      cells.push(tail.slice());
      axis === "X" ? tail[0]++ : tail[1]++;
    }

    //Check for overlapping
    for (const cell of cells) {
      if (cell.toString() in this.occupiedCells) {
        return "Overlapped";
      }
    }

    cells.forEach((cell) => {
      this.occupiedCells[cell] = ship;
    });

    return this.occupiedCells;
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
