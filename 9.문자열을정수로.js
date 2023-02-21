function solution(s) {
  let answer = 0;
  const length = s.length;

  if ([...s][0] === "+") {
    answer = parseInt(s.substr(1, length - 1));
  } else if ([...s][0] === "-") {
    answer -= parseInt(s.substr(1, length - 1));
  } else {
    answer = parseInt(s);
  }

  return answer;
}

console.log(solution("-1234"));
