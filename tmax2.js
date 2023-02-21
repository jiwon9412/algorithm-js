function solution(stats) {
  let answer = 0;
  let arrChain = []; //먹이사슬 배열

  stats.sort((a, b) => a[0] - b[0]); // 공격력으로 오름차순 정렬 (앞의 몬스터는 뒤의 몬스터를 절대 먹을 수 없음)

  for (let i = 0; i < stats.length; i++) {
    let monster = stats[i];
    let chain = [i]; //먹이사슬
    for (let j = 0; j < stats.length; j++) {
      // 같은 몬스터는 건너뛰기
      if (i === j) continue;
      if (monster[0] < stats[j][0] && monster[1] < stats[j][1]) {
        chain.push(j);
        monster = stats[j];
      }
    }
    arrChain.push(chain);
  }
  // 먹이사슬 배열 중 가장 긴 먹이사슬의 길이 => answer
  arrChain.forEach((chain) => {
    if (chain.length > answer) answer = chain.length;
  });

  return answer;
}
