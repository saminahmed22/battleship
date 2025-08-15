import { GameBoard } from "./gameBoard";

export class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
  }
}
