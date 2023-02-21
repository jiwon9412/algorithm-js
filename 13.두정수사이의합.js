function solution(a, b) {
  let answer = 0;
  let isBiggerA = a - b >= 0;

  if (isBiggerA) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }

  return answer;
}

console.log(solution(5, 3));
