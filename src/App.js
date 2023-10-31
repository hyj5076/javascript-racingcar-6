import UserInputCarName from "./utils/UserInputCarName";
import ShowGameResult from "./utils/ShowGameResult";
import ShowPlayLog from "./utils/ShowPlayLog";
import UserInputGoalNumber from "./utils/UserInputGoalNumber";

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
    const updatedCarPositions = this.playLog.updateCarPositionsAndPrint();

    // 업데이트 된 자동차 위치 반영
    this.gameResult.carPositions = updatedCarPositions;

    // 우승자 확인
    const winners = this.gameResult.findWinner(this.rounds);
    if (winners.length > 0) {
      this.gameResult.printGameResult(this.rounds);
      return;
    }
  }

  showResult() {
    this.gameResult.printGameResult(this.rounds);
  }
}

export default App;
