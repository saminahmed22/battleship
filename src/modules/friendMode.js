import {
  getName,
  initPlayers,
  placeShips,
  renderPlayingBoards,
  runGame,
} from "./dom.js";

export async function execModeFriend() {
  // Get names for both player
  const firstPlayerName = await getName("firstPlayer", "optionFriend");
  const secondPlayerName = await getName("secondPlayer", "optionFriend");

  // Initialize both players
  // Each object contains players' name and a board object
  const [firstPlayerObj, secondPlayerObj] = initPlayers(
    firstPlayerName,
    secondPlayerName,
  );

  // Render placement board for first player
  await placeShips(firstPlayerObj, secondPlayerName);

  // Render placemetn board for second player
  await placeShips(secondPlayerObj, firstPlayerName);

  renderPlayingBoards([firstPlayerName, secondPlayerName]);

  await runGame(firstPlayerObj, secondPlayerObj);
}
