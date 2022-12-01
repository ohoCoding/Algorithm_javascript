/* i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
   예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
   정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
*/
const solution = (n) => {
  let factorial_result = 1;

  console.log("주어진 n의 값: ", n);
  for (let i = 1; i <= n; i++) {

    console.log("for문 도는 i의 값:", i);

    factorial_result = factorial_result * i;

    // factorial 한 결과가 주어진 정수 n과 일치할때
    if (factorial_result === n) {
      console.log("factorial 한 결과가 주어진 정수 n과 일치");
      console.log("팩토리얼 한 결과: ", factorial_result);
      return i;
      // factorial 한 결과가 주어진 정수 n보다 크면
    } else if (factorial_result > n) {
      console.log("팩토리얼 한 결과: ", factorial_result);
      console.log("팩토리얼 한 결과가 주어진 정수 n보다 클때");
      return i - 1;
    }
  }
}
console.log(solution(7));