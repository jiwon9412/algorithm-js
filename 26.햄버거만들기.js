function solution(infos, actions) {
  let answer = 0;

  let bLogin = false; //로그인 여부
  let bIsFillCart = false; // 장바구니에 물건이 있는지 여부

  //1. actions 전체탐색
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].substr(0, 5) === "LOGIN") {
      const enterdInfo = actions[i].substr(6);
      for (let j = 0; j < infos.length; j++) {
        if (infos[j] === enterdInfo) {
          bLogin = true;
          break;
        }
      }
    } else if (actions[i].substr(0, 3) === "ADD") {
    }
  }

  return answer;
}
