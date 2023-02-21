function solution(arr) {
  let answer = 0;
  const length = arr.length;

  arr.forEach((item, index) => {
    answer += item;
  });
  answer /= length;

  return answer;
}

console.log(solution([5, 5]));
