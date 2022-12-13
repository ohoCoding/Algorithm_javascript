const solution1 = (numbers) => {
  var answer = 0;

  // 첫번쨰 방법: 주어진 배열 numbers를 내림차순으로 정렬 한다음 
  // a는 제일 큰 첫번째 요소 
  // b는 그 다음으로 큰 두번째 요소 
  var a, b = 1;
  a = numbers.sort(function (a, b) {
    return b - a;
  })[0];
  b = numbers.sort(function (a, b) {
    return b - a;
  })[1];

  answer = a * b;
  console.log("첫번째 방법:", answer);
  return answer;
}

const solution2 = (numbers) => {
  var answer = 0;
  // 두번째 방법: numbers의 숫자들을 내림차순으로 정렬 -> 인접한 숫자끼리 곱하는 배열 선언
  // -> 내림차순으로 정렬한 배열길이만큼 for문 돌리면서 
  // -> 인접한 숫자끼리 곱하는 배열에 push
  // -> 인접한 숫자끼리 곱하는 배열에서 최대값
  let descArr = [];

  descArr = numbers.sort(function (a, b) {
    return b - a;
  });

  const adjacentNumber = [];
  for (let i = 0; i < descArr.length - 1; i++) {
    adjacentNumber.push(descArr[i] * descArr[i + 1])
  }
  console.log("두번째 방법:", Math.max(...adjacentNumber));
  answer = Math.max(...adjacentNumber);
  return answer;
}

const solution3 = (numbers) => {
  var answer = 0;
  // 세번째 방법: 숫자 곱하는 배열 선언 
  // 주어진 배열 numbers의 길이 만큼 for문 돌리면서 
  // 배열안의 각각 숫자 곱하는 배열에 push
  // 숫자 곱하는 배열중의 최대값 출력 
  const NumberSupply = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    NumberSupply.push(numbers[i] * numbers[i + 1])
  }
  console.log("세번째 방법:", Math.max(...NumberSupply));
  answer = Math.max(...NumberSupply);
  return answer;
}

console.log(solution1([0, 31, 24, 10, 1, 9]));
console.log(solution2([0, 31, 24, 10, 1, 9]));
console.log(solution3([0, 31, 24, 10, 1, 9]));