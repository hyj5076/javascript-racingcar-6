import UserInputCarName from "./utils/UserInputCarName";
import ShowGameResult from "./utils/ShowGameResult";
import ShowPlayLog from "./utils/ShowPlayLog";
import UserInputGoalNumber from "./utils/UserInputGoalNumber";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carManager = new UserInputCarName();
    this.tryRound = new UserInputGoalNumber();
  }

  async play() {
    await this.setupGame();
    await this.playRound();
    this.showResult();
  }

  async setupGame() {
    this.carPositions = await this.carManager.setupCarPositions();
    this.rounds = await this.tryRound.inputGoalNumber();
    this.gameResult = new ShowGameResult(this.carPositions);
    this.playLog = new ShowPlayLog(this.carPositions);
  }

  async playRound() {
    await this.playLog.printAllRoundLog();
  }

  showResult() {
    this.gameResult.printGameResult();
  }
}

export default App;
