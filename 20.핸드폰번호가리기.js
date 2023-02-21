function solution(phone_number) {
  var answer = "";
  answer = "*".repeat(phone_number.length - 4) + phone_number.substr(-4);
  return answer;
}

console.log(solution("01033334444"));
