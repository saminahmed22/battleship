import { Player } from "./player.js";
import { Ship } from "./ship.js";

const body = document.querySelector("body");
const modeSelectModal = document.querySelector(".selectMode");
const boardsContainer = document.querySelector(".boards");
const playingStage = document.querySelector(".playingStage");
const getNameForm = document.querySelector(".getName");
const nameInput = document.getElementById("name");
const shipPlaceStage = document.querySelector(".placeShipStage");
const turnAnnouncer = document.querySelector(".turnAnnouncer");
const restartBtn = document.querySelector(".restartBtn");

export async function getMode() {
  modeSelectModal.style.display = "flex";
  return new Promise((resolve) => {
    modeSelectModal.addEventListener("click", (event) => {
      const button = event.target.closest(".button");
      if (button) {
        modeSelectModal.style.display = "none";
        resolve(button.classList[0]);
      }
    });
  });
}

export function getName(player, mode) {
  if (player === "secondPlayer" && mode === "optionComputer") return "Computer";

  if (player === "secondPlayer" && mode === "optionFriend") {
    getNameForm.querySelector("p").textContent =
      "and what's your friend's name?";
  }

  getNameForm.style.display = "flex";

  return new Promise((resolve) => {
    const handler = (event) => {
      event.preventDefault();
      const name = nameInput.value;
      getNameForm.style.display = "none";
      getNameForm.removeEventListener("submit", handler);
      resolve(name);
    };
    getNameForm.addEventListener("submit", handler);
    getNameForm.reset();
  });
}

export function initPlayers(firstPlayerName, secondPlayerName) {
  const firstPlayer = new Player(firstPlayerName);
  const secondPlayer = new Player(secondPlayerName);

  return [firstPlayer, secondPlayer];
}

function instructionDiv() {
  const instructionDiv = document.querySelector(".instructionDiv");
  const clone = instructionDiv.cloneNode(true);
  clone.style.display = "flex";
  return clone;
}

export function renderPlacementBoard(playerObject, ship, secondPlayerName) {
  const boardObject = playerObject.board;

  const placemnetBoardContainer = document.createElement("div");
  placemnetBoardContainer.classList.add("placemnetBoardContainer");

  const boardTitle = document.createElement("div");
  boardTitle.classList.add("boardTitle");

  const boardTitleText = document.createElement("p");
  boardTitleText.innerHTML = `${playerObject.name} Place your six ships on the board<br>and make sure ${secondPlayerName} isn't watching!`;
  boardTitle.appendChild(boardTitleText);
  placemnetBoardContainer.appendChild(boardTitle);

  const genGrid = createPlacementBoardGrid(boardObject);
  placemnetBoardContainer.appendChild(genGrid);

  shipPlaceStage.appendChild(placemnetBoardContainer);
  shipPlaceStage.appendChild(instructionDiv());
  return placementBoardListeners(boardObject, ship);
}

function createPlacementBoardGrid(boardObject, size = 10) {
  const board = document.createElement("div");
  board.classList.add("board");

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.coordinate = `[${j},${i}]`;

      // this will leak all ships in actual game
      if (Object.keys(boardObject.occupiedCells).includes(`${j},${i}`)) {
        cell.style.backgroundColor = "rgba(2, 92, 156, 0.859)";
        cell.classList.add("occupied");
      }

      row.appendChild(cell);
    }
    board.appendChild(row);
  }

  return board;
}

function placementBoardListeners(boardObject, ship) {
  return new Promise((resolve) => {
    const boardDiv = document.querySelector(".board");
    let hoveredCells = null;
    let cellCoordinates;

    boardDiv.addEventListener("mouseover", (event) => {
      const cell = event.target.closest(".cell");
      if (!cell) return;
      cellCoordinates = JSON.parse(cell.dataset.coordinate);
      hoveredCells = boardObject.getPossibleCells(ship, cellCoordinates);

      if (
        hoveredCells.some((cell) =>
          Object.keys(boardObject.occupiedCells).includes(cell.join(",")),
        )
      ) {
        changeCellColour(hoveredCells, "overlapped");
      } else {
        changeCellColour(hoveredCells, "in");
      }
    });

    boardDiv.addEventListener("mouseout", () => {
      changeCellColour(hoveredCells, "out");
    });

    boardDiv.addEventListener("wheel", () => {
      changeCellColour(hoveredCells, "out");
      ship.axis = ship.axis === "X" ? "Y" : "X";
      hoveredCells = boardObject.getPossibleCells(ship, cellCoordinates);
      if (
        hoveredCells.some((cell) =>
          Object.keys(boardObject.occupiedCells).includes(cell.join(",")),
        )
      ) {
        changeCellColour(hoveredCells, "overlapped");
      } else {
        changeCellColour(hoveredCells, "in");
      }
    });

    boardDiv.addEventListener("click", () => {
      if (
        hoveredCells.some((cell) =>
          Object.keys(boardObject.occupiedCells).includes(cell.join(",")),
        )
      ) {
        resolve({ placed: 0, axis: ship.axis });
        shipPlaceStage.textContent = "";
        return;
      } else {
        shipPlaceStage.textContent = "";
        boardObject.placeShip(hoveredCells, ship);
        resolve({ placed: 1, axis: ship.axis });
      }
    });
  });
}

function changeCellColour(cellArr, action) {
  if (!cellArr) return;
  cellArr.forEach((cellCoordinations) => {
    const cellStr = JSON.stringify(cellCoordinations);
    const cellDiv = document.querySelector(`[data-coordinate='${cellStr}']`);

    const isOccupied = cellDiv.classList.contains("occupied");

    let color;
    if (action === "overlapped") {
      color = isOccupied ? "rgba(220, 20, 60, 0.78)" : "rgba(220, 20, 60, 0.3)";
    } else if (action === "in") {
      if (!isOccupied) {
        color = "rgba(255, 255, 255, 0.1)";
      } else {
        return;
      }
    } else if (action === "out") {
      if (!isOccupied) {
        color = "transparent";
      } else {
        color = "rgba(2, 92, 156, 0.859)";
      }
    }
    cellDiv.style.backgroundColor = color;
  });
}

export async function placeShips(
  playerObject,
  secondPlayerName,
  shipCount = 6,
  shipSizes = [5, 4, 4, 3, 3, 2],
) {
  shipPlaceStage.style.display = "flex";
  let curretShipIndex = 0;
  let currentAxis = "X";
  while (shipCount) {
    const ship = new Ship(shipSizes[curretShipIndex], currentAxis);
    const { placed, axis } = await renderPlacementBoard(
      playerObject,
      ship,
      secondPlayerName,
    );
    curretShipIndex += placed;
    shipCount -= placed;
    currentAxis = axis;
  }
  shipPlaceStage.style.display = "none";
}

export function renderPlayingBoards(playerNames) {
  playerNames.forEach((playerName) => {
    const playerNameMod = playerName.replace(/\s/g, "");

    const boardDiv = document.createElement("div");
    boardDiv.classList.add("boardDiv", `${playerNameMod}_boardDiv`);

    const boardTitle = document.createElement("div");
    boardTitle.classList.add("boardTitle", `${playerNameMod}BoardTitle`);
    const boardTitleText = document.createElement("p");
    boardTitleText.textContent = `${playerName}'s board`;

    boardTitle.appendChild(boardTitleText);
    boardDiv.appendChild(boardTitle);

    const boardGrid = createPlayingBoardGrid(playerNameMod);
    boardDiv.appendChild(boardGrid);

    boardsContainer.appendChild(boardDiv);
  });
  playingStage.style.display = "flex";
}

function createPlayingBoardGrid(playerName, size = 10) {
  const board = document.createElement("div");
  board.classList.add("board", `${playerName}_board`);

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.coordinate = `${j},${i}`;
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
  return board;
}

export async function runGame(firstPlayerObj, secondPlayerObj) {
  let attackingPlayer = firstPlayerObj;
  let defendingPlayer = secondPlayerObj;

  const announcerText = document.createElement("p");
  turnAnnouncer.appendChild(announcerText);
  const firstPlayerBoard = firstPlayerObj.board;
  const secondPlayerBoard = secondPlayerObj.board;
  while (
    !firstPlayerBoard.hasAllSunked() &&
    !secondPlayerBoard.hasAllSunked()
  ) {
    announcerText.textContent = `${attackingPlayer.name}'s turn`;
    const isHit = await attackCell(defendingPlayer);
    if (isHit != "hit") {
      [attackingPlayer, defendingPlayer] = [defendingPlayer, attackingPlayer];
    }
  }
  const winner = firstPlayerObj.board.hasAllSunked()
    ? secondPlayerObj.name
    : firstPlayerObj.name;

  announcerText.textContent = `${winner} is the winner!!!`;
  announcerText.classList.add("blink");

  setTimeout(() => {
    document.querySelector(".overlay").style.display = "flex";
  }, 6000);
}

export async function attackCell(currentPlayer) {
  const board = document.querySelector(
    `.${currentPlayer.name.replace(/\s/g, "")}_board`,
  );
  const occupiedCells = Object.keys(currentPlayer.board.occupiedCells);
  board.classList.add("activeBoard");

  return new Promise((resolve) => {
    function handler(event) {
      const cell = event.target.closest(".cell");
      if (!cell) return;

      const hasTargetted = () => {
        return ["hit", "miss"].some((item) => cell.classList.contains(item));
      };

      if (!hasTargetted()) {
        const markerDiv = document.createElement("div");
        let cellClass = "miss";
        let markerClass = "orangeMark";

        const cellCoordinates = cell.dataset.coordinate;
        if (occupiedCells.includes(cellCoordinates)) {
          cellClass = "hit";
          markerClass = "redMark";
          currentPlayer.board.receiveAttack(cellCoordinates);
        }

        cell.classList.add(cellClass);
        markerDiv.classList.add(markerClass);
        cell.appendChild(markerDiv);
        board.classList.remove("activeBoard");

        board.removeEventListener("click", handler);
        resolve(cellClass);
      }
    }
    board.addEventListener("click", handler);
  });
}

restartBtn.addEventListener("click", () => {
  location.reload(true);
});
