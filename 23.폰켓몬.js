function solution(nums) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i]) === false) {
      arr.push(nums[i]);
      answer++;
    }
    if (arr.length >= nums.length / 2) break;
  }

  return answer;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
