export class Ship {
  constructor(size, axis = "X") {
    this.size = size;
    this.axis = axis;
    this.hit = 0;
    this.isSunk = false;
  }

  checkSunk() {
    this.isSunk = this.hit >= this.size;
    return this.isSunk;
  }

  incrementHit() {
    this.hit += 1;
    return this.hit;
  }
}
