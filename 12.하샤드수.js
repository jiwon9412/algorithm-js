function solution(x) {
  let answer = true;
  let sum = 0;
  [...(x + "")].forEach((item) => {
    sum += parseInt(item);
  });

  if (x % sum !== 0) answer = false;

  return answer;
}

console.log(solution(13));
