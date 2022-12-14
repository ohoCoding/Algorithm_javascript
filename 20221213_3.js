const solution = (slice, n) => {
  var answer = 1;
  console.log(slice);
  console.log(n);
  while (true) {
    // slice * answer 는 총 피자조각수
    // 총피자조각수를 사람수 n으로 나누면 
    // 필요한 피자 판 수가 나온다
    // while 문을 돌려서 
    if ((slice * answer) / n >= 1) {
      return answer;
    }
    console.log(answer);
    answer++;
  }

}
console.log(solution(7, 10));