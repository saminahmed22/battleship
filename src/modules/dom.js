import { Player } from "./player.js";
import { Ship } from "./ship.js";

const modeSelectModal = document.querySelector(".selectMode");
const boardsContainer = document.querySelector(".boards");
const playingStage = document.querySelector(".playingStage");
const getNameForm = document.querySelector(".getName");
const nameInput = document.getElementById("name");
const placeShipStage = document.querySelector(".placeShipStage");
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

export function renderPlacementStage(playerObject, secondPlayerName) {
  placeShipStage.textContent = "";

  const boardObject = playerObject.board;

  const placemnetBoardContainer = document.createElement("div");
  placemnetBoardContainer.classList.add("placementBoardContainer");

  const boardTitle = document.createElement("div");
  boardTitle.classList.add("boardTitle");

  const boardTitleText = document.createElement("p");
  if (secondPlayerName === "Computer") {
    boardTitleText.innerHTML = `${playerObject.name} Place your six ships on the board`;
  } else {
    boardTitleText.innerHTML = `${playerObject.name} Place your six ships on the board<br>and make sure ${secondPlayerName} isn't watching!`;
  }

  boardTitle.appendChild(boardTitleText);
  placemnetBoardContainer.appendChild(boardTitle);

  const genGrid = createPlacementBoardGrid(boardObject);
  placemnetBoardContainer.appendChild(genGrid);

  const actBtnContainer = document.createElement("div");
  actBtnContainer.classList.add("actBtnContainer");

  const clearBtn = document.createElement("button");
  clearBtn.classList.add("clearBtn");
  clearBtn.textContent = "Clear";
  actBtnContainer.appendChild(clearBtn);

  const confirmBtn = document.createElement("button");
  confirmBtn.classList.add("confirmBtn");
  confirmBtn.textContent = "Confirm";
  actBtnContainer.appendChild(confirmBtn);

  placemnetBoardContainer.appendChild(actBtnContainer);

  placeShipStage.appendChild(placemnetBoardContainer);
  placeShipStage.appendChild(instructionDiv());
}

function createPlacementBoardGrid(boardObject, size = 10) {
  const board = document.createElement("div");
  board.classList.add("board", "placementBoard");

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.coordinate = `[${j},${i}]`;

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

function changeCellColour(cellArr, action) {
  if (!cellArr) return new Error(`Cell Array: ${cellArr}`);
  if (!action) return new Error(`Action Array: ${action}`);

  cellArr.forEach((cellCoordinations) => {
    const cellStr = JSON.stringify(cellCoordinations);
    const cellDiv = document.querySelector(`[data-coordinate='${cellStr}']`);

    const isOccupied = cellDiv.classList.contains("occupied");

    let color;
    if (action === "overlapped") {
      color = isOccupied ? "rgba(220, 20, 60, 0.78)" : "rgba(220, 20, 60, 0.3)";
    } else if (action === "in") {
      color = !isOccupied ? "rgba(255, 255, 255, 0.1)" : color;
    } else if (action === "out") {
      color = !isOccupied ? "transparent" : "rgba(2, 92, 156, 0.859)";
    }
    cellDiv.style.backgroundColor = color;
  });
}

export function placementBoardListeners(boardObject, ship, handlePlacement) {
  const boardContainer = document.querySelector(".placementBoardContainer");

  let hoveredCells, cellCoordinates;

  let resolveAxis;
  const axisPromise = new Promise((resolve) => {
    resolveAxis = resolve;
  });

  const hasTargetted = () => {
    if (!hoveredCells) return true;
    return hoveredCells.some((cell) =>
      Object.keys(boardObject.occupiedCells).includes(cell.join(",")),
    );
  };

  const updateHoveredCells = () => {
    hoveredCells = boardObject.getPossibleCells(ship, cellCoordinates);
  };

  const mouseOverHandler = (event) => {
    const cellDiv = event.target;
    if (!cellDiv.classList.contains("cell")) return;

    cellCoordinates = JSON.parse(cellDiv.dataset.coordinate);

    updateHoveredCells();

    changeCellColour(hoveredCells, hasTargetted() ? "overlapped" : "in");
  };

  const mouseOutHandler = (event) => {
    const cellDiv = event.target;
    if (!cellDiv.classList.contains("cell")) return;

    changeCellColour(hoveredCells, "out");
  };

  const wheelHandler = (event) => {
    event.preventDefault();
    const cellDiv = event.target;
    if (!cellDiv.classList.contains("cell")) return;

    changeCellColour(hoveredCells, "out");

    ship.axis = ship.axis === "X" ? "Y" : "X";

    updateHoveredCells();

    changeCellColour(hoveredCells, hasTargetted() ? "overlapped" : "in");
  };

  const clickHandler = (event) => {
    const cellDiv = event.target;
    if (!cellDiv.classList.contains("cell")) return;

    const isValid = !hasTargetted();

    handlePlacement(isValid, boardObject, ship, hoveredCells);

    resolveAxis(ship.axis);
  };

  boardContainer.addEventListener("mouseover", mouseOverHandler);
  boardContainer.addEventListener("mouseout", mouseOutHandler);
  boardContainer.addEventListener("wheel", wheelHandler);
  boardContainer.addEventListener("click", clickHandler);

  const cleanupBoard = () => {
    boardContainer.removeEventListener("mouseover", mouseOverHandler);
    boardContainer.removeEventListener("mouseout", mouseOutHandler);
    boardContainer.removeEventListener("wheel", wheelHandler);
    boardContainer.removeEventListener("click", clickHandler);
  };

  return { axisPromise, cleanupBoard };
}

export async function placeShips(
  playerObject,
  secondPlayerName,
  shipSizes = [5, 4, 4, 3, 3, 2],
) {
  const boardObject = playerObject.board;

  const currentState = {
    index: 0,
    axis: "X",
  };

  renderPlacementStage(playerObject, secondPlayerName);
  placeShipStage.style.display = "flex";

  const clearBtn = document.querySelector(".clearBtn");
  const scrambleBtn = document.querySelector(".scrambleShipBtn");
  const confirmBtn = document.querySelector(".confirmBtn");

  confirmBtn.disabled = true;
  clearBtn.disabled = true;

  function scrambleShips() {
    botPlaceShips(boardObject);
    removeBoardListeners();
    updatePlacementGrid(boardObject);

    clearBtn.disabled = false;
    confirmBtn.disabled = false;

    currentState.index = shipSizes.length + 10;
  }

  function clearBoard() {
    boardObject.occupiedCells = {};

    currentState.index = 0;
    currentState.axis = "X";

    removeBoardListeners();

    updatePlacementGrid(boardObject);

    confirmBtn.disabled = true;

    PlaceShipLoop();
  }

  function cleanupButton() {
    scrambleBtn.removeEventListener("click", scrambleShips);
    clearBtn.removeEventListener("click", clearBoard);
  }

  const handlePlacement = (isValid, boardObject, ship, cells) => {
    if (isValid) {
      boardObject.placeShip(cells, ship);
      currentState.index++;
    }
    removeBoardListeners();
    updatePlacementGrid(boardObject);
  };

  let removeBoardListeners;
  const PlaceShipLoop = async () => {
    while (currentState.index < shipSizes.length) {
      clearBtn.disabled = currentState.index <= 0;

      const ship = new Ship(shipSizes[currentState.index], currentState.axis);
      const { axisPromise, cleanupBoard } = placementBoardListeners(
        boardObject,
        ship,
        handlePlacement,
      );
      removeBoardListeners = cleanupBoard;
      currentState.axis = await axisPromise;
    }
    confirmBtn.disabled = false;
  };

  return new Promise((resolve) => {
    clearBtn.addEventListener("click", clearBoard);
    scrambleBtn.addEventListener("click", scrambleShips);

    confirmBtn.addEventListener("click", () => {
      placeShipStage.style.display = "none";
      cleanupButton();
      resolve();
    });

    PlaceShipLoop();
  });
}

function updatePlacementGrid(boardObj) {
  document.querySelector(".placementBoard").remove();
  const title = document.querySelector(".boardTitle");
  title.after(createPlacementBoardGrid(boardObj));
}

export function botPlaceShips(
  boardObj,
  shipCount = 6,
  shipSizes = [5, 4, 4, 3, 3, 2],
) {
  boardObj.occupiedCells = {};

  const axies = ["X", "Y"];

  let curretShipIndex = 0;

  let possibleCells;
  while (shipCount) {
    const computerAxis = axies[randomNumGen(2) - 1];
    const ship = new Ship(shipSizes[curretShipIndex], computerAxis);
    const pos = [randomNumGen(10), randomNumGen(10)];
    possibleCells = boardObj.getPossibleCells(ship, pos);
    if (
      !possibleCells.some((cell) =>
        Object.keys(boardObj.occupiedCells).includes(cell.join(",")),
      )
    ) {
      boardObj.placeShip(possibleCells, ship);
      curretShipIndex += 1;
      shipCount -= 1;
    }
  }
}

function randomNumGen(range) {
  return Math.floor(Math.random() * range) + 1;
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
  let isHit, lastAttack, variables;
  while (
    !firstPlayerBoard.hasAllSunked() &&
    !secondPlayerBoard.hasAllSunked()
  ) {
    announcerText.textContent = `${attackingPlayer.name}'s turn`;
    if (attackingPlayer.name === "Computer") {
      [isHit, lastAttack, variables] = await botAttackCell(
        defendingPlayer,
        isHit === "hit" ? lastAttack : null,
        isHit === "hit" ? variables : null,
      );
    } else {
      isHit = await attackCell(defendingPlayer);
    }

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

async function attackCell(currentPlayer) {
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

async function botAttackCell(botObject, previousAttack, variables) {
  const boardObj = botObject.board;
  const occupiedCells = Object.keys(botObject.board.occupiedCells);

  const board = document.querySelector(
    `.${botObject.name.replace(/\s/g, "")}_board`,
  );
  board.classList.add("activeBoard");

  return new Promise((resolve) => {
    const markerDiv = document.createElement("div");

    let pos, cell, cellClass, markerClass;

    while (true) {
      [pos, variables] = getNextAttack(previousAttack, variables, boardObj);
      cell = document.querySelector(`[data-coordinate="${pos}"]`);

      const hasTargetted = () => {
        return ["hit", "miss"].some((item) => cell.classList.contains(item));
      };

      if (!hasTargetted()) {
        if (!occupiedCells.includes(pos)) {
          boardObj.missedCells.push(pos);
          cellClass = "miss";
          markerClass = "orangeMark";
          break;
        } else {
          boardObj.receiveAttack(pos);
          cellClass = "hit";
          markerClass = "redMark";
          break;
        }
      }
    }

    setInterval(() => {
      cell.classList.add(cellClass);
      markerDiv.classList.add(markerClass);
      cell.appendChild(markerDiv);
      board.classList.remove("activeBoard");
      resolve([cellClass, pos, variables]);
    }, 800);
  });
}

// If it's the first move or previous attack was not a hit,
// it will retrun a [random pos and null as variable]

// If the random pos was a hit, it will receive the pos of previous attack but as the variables were returned as null, it will receive null as variable.

// it will generate all possible move from that received pos, [[pos, [used operator, index]] * 4] and also validate all of them for being out of bound or for being targeted previously

// if it got blocked, means there is no possible moves in any direction, it will return a random pos with null as an variable

// As there is no guarantee which one of the nearest non-targeted cell contains the other part of the ship,
// it will return [one of the possible pos randomlly and used variable to generate that pos]

// if this randomly selected pos was the next part of the ship, means it was a hit, this time it will receive both the new hit pos and variables
// again it will generate all possible move from that received pos, [[pos, [used operator, index]] * 4] and also validate all of them for being out of bound or for being targeted previously

// if again, it is blocked, this time, it will reverse the operator in the variable, which means it will go backwards, and it will keep going till the next cell is not hit,
// And also not missed(if missed, it will simply randomly return a pos and its varaiable). If not hit or miss, it will return that pos with the used variable, chances are it will be a hit.
//  if not loop goes on.

// varaible means whatever the random operator(+ or -) and whatever the random axis cooridnate was chosen previously which made a hit.
// then

function getNextAttack(previousAttack, variables) {
  if (!previousAttack) {
    return [`${randomNumGen(10)},${randomNumGen(10)}`, null];
  }

  cell = document.querySelector(`[data-coordinate="${previousAttack}"]`);

  const hasTargetted = () => {
    return ["hit", "miss"].some((item) => cell.classList.contains(item));
  };

  const previousAttackArr = previousAttack.split(",").map(Number);

  let pos, index;
  const operators = ["+", "-"];
  const possibleMoves = [];

  for (const operator of operators) {
    for (let i = 0; i < previousAttackArr.length; i++) {
      possibleMoves.push([
        operator === "+" ? previousAttackArr[i]++ : previousAttackArr[i]--,
        [operator, i],
      ]);
    }
  }

  let isBlocked = false;
  for (const move of possibleMoves) {
    const moveStr = move.join(",");
    if (occupiedCells.contains(moveStr) || missedCells.contains(moveStr)) {
      isBlocked = true;
    } else {
      isBlocked = false;
    }
  }

  if (isBlocked) {
    variables[0] = variables[0] === "+" ? "-" : "+";
  }

  while (!pos) {
    let nextAttack = null; //HERE ISSUE

    if (variables) {
      [operator, index] = variables;
    } else {
      operator = operators[randomNumGen(2) - 1];
      index = randomNumGen(2) - 1;
    }

    operator === "+" ? nextAttack[index]++ : nextAttack[index]--;

    // Infinite Loop Issue
    // if it's blocked in every direction,botAttack cell will keep calling this funtion,
    // and as it's already block on all direction, whatever it returns will never accepted

    if (
      nextAttack[0] < 1 ||
      nextAttack[0] > 10 ||
      nextAttack[1] < 1 ||
      nextAttack[1] > 10
    ) {
      continue;
    }

    pos = nextAttack.join(",");
  }
  variables = [operator, index];
  return [pos, variables];
}

restartBtn.addEventListener("click", () => {
  location.reload(true);
});
