function solution(number, limit, power) {
  let answer = 0;

  const calDivisorCnt = (num) => {
    if (num === 1) return 1;

    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (i == Math.sqrt(num)) cnt++;
      else if (num % i === 0) cnt += 2;
    }
    return cnt;
  };

  for (let i = 1; i <= number; i++) {
    const tempPower = calDivisorCnt(i);
    if (tempPower > limit) {
      answer += power;
    } else {
      answer += tempPower;
    }
    //console.log(`${i} : ${answer}`);
  }

  return answer;
}

console.log(solution(5, 3, 2));
