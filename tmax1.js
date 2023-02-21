function solution(infos, actions) {
  let answer = [];

  let bLogin = false; // 로그인 여부
  let bIsFilledCart = false; //장바구니에 물건이 있는지 여부

  //actions 전체탐색
  for (let i = 0; i < actions.length; i++) {
    //1.로그인일 경우
    if (actions[i].substr(0, 5) === "LOGIN") {
      let bTempResult = false;
      //이미 로그인 했다면 false
      if (bLogin) {
        answer.push(false);
        continue;
      }
      const enteredInfo = actions[i].substr(6); //입력한 정보
      //infos의 정보와 일치하는지 확인
      for (let j = 0; j < infos.length; j++) {
        if (infos[j] === enteredInfo) {
          bTempResult = true;
          bLogin = true;
          break;
        }
      }
      answer.push(bTempResult);
    }
    //2.장바구니 담기일 경우
    else if (actions[i].substr(0, 3) === "ADD") {
      if (bLogin) {
        bIsFilledCart = true;
        answer.push(true);
      } else {
        answer.push(false);
      }
    }
    //3. 주문일 경우
    else if (actions[i] === "ORDER") {
      if (bIsFilledCart) {
        answer.push(true);
        bIsFilledCart = false;
      } else {
        answer.push(false);
      }
    }
  }
  return answer;
}
