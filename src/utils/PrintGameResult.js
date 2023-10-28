import { GAME_RESULT, WINNER } from "../const/Messages";

export const printGameResult = (carGame) => {
  Console.print(GAME_RESULT);
  carGame.printRoundResult();
  const winners = carGame.findWinner();
  Console.print(`${WINNER} : ${winners.join(", ")}`);
};
