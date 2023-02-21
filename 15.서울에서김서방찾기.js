function solution(seoul) {
  let answer = "";
  let x = 0;

  seoul.forEach((item, index) => {
    if (item === "Kim") {
      x = index;
    }
  });

  answer = `김서방은 ${x}에 있다`;

  return answer;
}

console.log(solution(["Jane", "Kim"]));
