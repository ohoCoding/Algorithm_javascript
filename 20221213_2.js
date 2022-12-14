const solution = (n) => {
  var answer = 1;
  // answer * 6 는 총 피자 조각수
  // 피자조각수를 사람수로 나눴을때 answer이 0이 나올때까지 while문 돌려
  while ((answer * 6) % n !== 0) {
    console.log(answer)
    answer++;
  }
  return answer;
}

console.log(solution(10))