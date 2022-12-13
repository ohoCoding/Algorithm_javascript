const solution = (numbers) => {
  const BruteForce = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 인덱스가 같은 경우는 제외

      console.log("앞에 곱할 숫자:", numbers[i]);
      console.log("뒤에 곱할 숫자:", numbers[j]);
      console.log("곱한 값:", numbers[i] * numbers[j]);
      BruteForce.push(numbers[i] * numbers[j])

    }
  }
  return Math.max(...BruteForce);
}
console.log(solution([1, 2, -3, 4, -5]));