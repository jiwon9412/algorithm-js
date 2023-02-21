function solution(n) {
  let answer = 0;
  let num = 0;
  num = Math.sqrt(n);

  if (num % 1 !== 0) {
    answer = -1;
  } else {
    answer = (num + 1) ** 2;
  }

  return answer;
}

console.log(solution(121));
