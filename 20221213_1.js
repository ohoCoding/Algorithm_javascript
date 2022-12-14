const solution = (n) => {
  var answer = 0;
  // console.log(n);
  console.log(n / 7);
  if (n / 7 > 1) {
    answer = Math.ceil(n / 7);
  } else {
    answer = 1;
  }

  return answer;
}
console.log(solution(8));