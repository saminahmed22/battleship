import { Ship } from "./ship.js";
import { GameBoard } from "./gameBoard.js";

// Tests for Ship Class and its methods
describe("Ship Class", () => {
  const ship = new Ship(5);

  describe("Increasing hit count", () => {
    test("Incriment hit count to 1", () => {
      expect(ship.incrementHit()).toEqual(1);
    });
    test("Incriment hit count to 2", () => {
      expect(ship.incrementHit()).toEqual(2);
    });
    test("Incriment hit count to 3", () => {
      expect(ship.incrementHit()).toEqual(3);
    });
    test("Incriment hit count to 4", () => {
      expect(ship.incrementHit()).toEqual(4);
    });
  });

  describe("checkSunk Function", () => {
    test("Returns false for checkSunk() before max hits", () => {
      expect(ship.checkSunk()).toBeFalsy();
    });

    test("Incriment hit count to 5", () => {
      expect(ship.incrementHit()).toEqual(5);
    });

    test("Returns true for checkSunk() after max hits", () => {
      expect(ship.checkSunk()).toBeTruthy();
    });
  });
});

// Tests for GameBoard Class and its methods
describe("GameBoard Class", () => {
  const ship = new Ship(7);
  const board = new GameBoard();

  describe("PlaceShip function", () => {
    const returnValue = board.placeShip(ship, [5, 3]);
    test("Returns the correct amount of occupied cells", () => {
      expect(Object.keys(returnValue).length).toEqual(7);
    });

    test("return if overlapped", () => {
      expect(board.placeShip(ship, [4, 3])).toBe("Overlapped");
    });
  });

  describe("Attack receive function", () => {
    test("Sucessfully attacking a pos", () => {
      expect(board.receiveAttack([4, 3])).toEqual(1);
    });

    test("Miss attacking a cell", () => {
      expect(board.receiveAttack([9, 5])).toEqual([9, 5]);
    });
  });

  describe("hasAllSunked Function", () => {].js
    test("Return true as all ship has been sunked", () => {
      expect(board.hasAllSunked()).toBeFalsy();
    });
  });
});
