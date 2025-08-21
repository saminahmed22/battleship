import {
  getName,
  initPlayers,
  placeShips,
  botPlaceShips,
  renderPlayingBoards,
  runGame,
} from "./dom.js";

export async function execGame(mode) {
  const firstPlayerName = await getName("firstPlayer", mode);
  const secondPlayerName = await getName("secondPlayer", mode);

  const [firstPlayerObj, secondPlayerObj] = initPlayers(
    firstPlayerName,
    secondPlayerName,
  );

  // place ship stage for first player
  await placeShips(firstPlayerObj, secondPlayerName);

  // place ship stage for second player
  mode === "optionComputer"
    ? botPlaceShips(secondPlayerObj.board)
    : await placeShips(secondPlayerObj, firstPlayerName);

  renderPlayingBoards([firstPlayerName, secondPlayerName]);
  await runGame(firstPlayerObj, secondPlayerObj);
}
