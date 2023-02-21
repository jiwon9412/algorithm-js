function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const tempNum = t.substr(i, p.length);
    //console.log(tempNum);
    if (parseInt(tempNum) <= parseInt(p)) answer++;
  }

  return answer;
}

console.log(solution("500220839878", "7"));
