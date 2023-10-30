import UserInputCarName from "./utils/UserInputCarName";
import ShowGameResult from "./utils/ShowGameResult";
import RoundManager from "./utils/RoundManager";
import UserInputRound from "./utils/UserInputRound";

class App {
  constructor() {
    this.carManager = new UserInputCarName();
    this.inputTry = new UserInputRound();
  }

  async play() {
    await this.setupGame();
    await this.playRound();
  }

  async setupGame() {
    this.carPositions = await this.carManager.setupCarPositions();
    this.rounds = await this.inputTry.inputRounds();
    this.gameResult = new ShowGameResult(this.carPositions);
    this.roundManager = new RoundManager(this.carPositions);
  }

  /*   async playRounds() {
    let winners;
    do {
      await this.playRound();
      winners = this.findWinner();
    } while (winners.length === 0);

    this.printGameResult(winners);
  } */

  async playRound() {
    await this.roundManager.playRound();
    this.printRoundResult();
  }

  printRoundResult() {
    this.roundManager.printRoundResult();
  }

  findWinner() {
    return this.gameResult.findWinner(this.rounds);
  }

  printGameResult(winners) {
    this.gameResult.printGameResult(winners);
  }
}

export default App;
