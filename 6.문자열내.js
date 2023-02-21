function solution(s) {
  let answer = true;
  let cntP = 0;
  let cntY = 0;

  [...s].forEach((element) => {
    if (element.toUpperCase() === "P") {
      cntP++;
    } else if (element.toUpperCase() === "Y") {
      cntY++;
    }
  });

  if (cntP !== cntY) {
    answer = false;
  }

  return answer;
}

console.log(solution("Pyy"));
