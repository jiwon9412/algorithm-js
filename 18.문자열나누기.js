function solution(s) {
  let answer = 0;
  let x = s[0];
  let cntX = 0;
  let cntNotX = 0;

  for (let i = 0; i < s.length; i++) {
    x = s[0];
    //console.log(x);
    if (s[i] === x) cntX++;
    else cntNotX++;

    //console.log(`${i} : ${x} , ${cntX} , ${cntNotX}`);

    if (cntX === cntNotX) {
      answer++;
      s = s.substr(i + 1, s.length - i - 1);
      //console.log(s);
      cntX = 0;
      cntNotX = 0;
      i = -1;
    } else if (s.length === i + 1) answer++;
  }

  return answer;
}

console.log(solution("aaabbaccccabba"));
