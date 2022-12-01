/*- 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
    - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
- 삼각형의 세 변의 길이가 담긴 배열 `sides`이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
*/
const solution = (sides) => {
  let sidesSum = 0;
  // 세번의 길이 합구하기
  sides.map((side) => sidesSum += side);
  console.log("세개의 선분 합: ", sidesSum);
  console.log("가장 긴변의 길이: ", Math.max(...sides));
  //가장 긴 변의 길이가 다른 두변의 길이 합보다 작을때 
  if (Math.max(...sides) < (sidesSum - Math.max(...sides))) {
    answer = 1;
    //가장 긴 변의 길이가 다른 두변의 길이 합보다 클때 
  } else {
    answer = 2;
  }
  return answer;
}
console.log(solution([5, 4, 3]));