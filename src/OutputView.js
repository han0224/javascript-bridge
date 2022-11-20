const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG } = require("./constants/Message");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(bridge) {
    const up = bridge[0].join("|");
    const down = bridge[1].join("|");
    Console.print(`[${up}]\n[${down}]\n`);
    return true;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult(isSuccess, retryCount, bridge) {
    Console.print(GAME_MSG.END);
    this.printMap(bridge);
    Console.print(
      `${GAME_MSG.PRINT_RESULT}${isSuccess ? GAME_MSG.TRUE : GAME_MSG.FALSE}`
    );
    Console.print(`${GAME_MSG.TOTAL_TRY}${retryCount}`);
  },
};

module.exports = OutputView;
