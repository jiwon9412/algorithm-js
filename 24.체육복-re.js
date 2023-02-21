function solution(n, lost, reserve) {
  let answer = 0;

  let newLost = lost.filter((item) => !reserve.includes(item));
  let newReserve = reserve.filter((item) => !lost.includes(item));

  newLost.sort((a, b) => a - b);
  answer = n - newLost.length;

  console.log(newLost);
  console.log(newReserve);

  newLost.forEach((item) => {
    if (newReserve.includes(item - 1)) {
      newReserve = newReserve.filter((res) => res !== item - 1);
      answer++;
    } else if (newReserve.includes(item + 1)) {
      newReserve = newReserve.filter((res) => res !== item + 1);
      answer++;
    }
  });

  return answer;
}

console.log(solution(6, [5, 3, 2], [1, 4, 5]));
