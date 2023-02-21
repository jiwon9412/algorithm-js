function solution(arr) {
  let answer = [];
  let tempArr = [...arr];
  const minValue = tempArr.sort((a, b) => a - b)[0];

  answer = arr.filter((item) => item !== minValue);
  if (answer.length === 0) answer = [-1];

  return answer;
}

console.log(solution([10]));
