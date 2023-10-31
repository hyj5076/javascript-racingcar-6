import { Console } from "@woowacourse/mission-utils";
import { movingForwardCase } from "./MovingForwardCase";
import { FORWARD_DASH, PLAY_LOG } from "../const/Messages";

class ShowPlayLog {
  constructor(carPositions) {
    this.carPositions = carPositions;
  }

  printAllRoundLog() {
    Console.print(PLAY_LOG);
    this.printForwardDash();
  }

  printForwardDash() {
    Object.keys(this.carPositions).forEach((carName) => {
      if (movingForwardCase()) {
        this.carPositions[carName] += FORWARD_DASH;
      }
    });
    this.printEachCarPosition();
  }

  printEachCarPosition() {
    Object.entries(this.carPositions).forEach(([carName, position]) => {
      Console.print(`${carName} : ${position}`);
    });
    Console.print("");
  }

  // 자동차 위치 업데이트
  updateCarPositionsAndPrint() {
    this.printForwardDash();
    return this.carPositions;
  }
}

export default ShowPlayLog;
