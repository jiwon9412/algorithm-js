function solution(n) {
  let answer = 0;
  let str = "";

  let arr = [...(n + "")].sort((a, b) => {
    return b - a;
  });

  arr.forEach((item) => {
    str = str + "" + item;
  });

  answer = parseInt(str);

  return answer;
}

console.log(solution(118372));
