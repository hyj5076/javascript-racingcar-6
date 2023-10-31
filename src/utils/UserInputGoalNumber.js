import { Console } from "@woowacourse/mission-utils";
import { QUESTION_GOAL_COUNT, ERROR_WRONG_ROUND } from "../const/Messages";

class UserInputGoalNumber {
  constructor() {
    this.number = 0;
  }

  async inputGoalNumber() {
    Console.print(QUESTION_GOAL_COUNT);
    const userInput = await Console.readLineAsync();
    const number = parseInt(userInput, 10);

    Console.print(number);
    this.setGoalNumber(number);
  }

  setGoalNumber(number) {
    const numberValid = !Number.isNaN(number) && number > 0;
    if (!numberValid) {
      throw new Error(ERROR_WRONG_ROUND);
    }

    this.number = number;
  }

  getGoalNumber() {
    return this.number;
  }
}

export default UserInputGoalNumber;
