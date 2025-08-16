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
  const ship = new Ship(6);
  const board = new GameBoard();

  describe("getPossibleCells function", () => {
    test("Retruns a array containing 5 cells", () => {
      const returnVal = board.getPossibleCells(ship, [1, 1]);
      board.placeShip(returnVal, ship);
      expect(returnVal.length).toEqual(6);
    });
  });

  describe("Attack receive function", () => {
    test("Sucessfully attacking a pos", () => {
      expect(board.receiveAttack("1,1")).toEqual(1);
    });
  });

  describe("hasAllSunked Function", () => {
    test("Return true as all ship has been sunked", () => {
      expect(board.hasAllSunked()).toBeFalsy();
    });
  });
});
