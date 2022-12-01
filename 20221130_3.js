/*문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/
const solution = (my_string, letter) => {
  var answer = '';
  console.log("문자열:", my_string);
  console.log("제거하고자 하는 문자: ", letter);
  // 대소문자를 구분하고 모든문자 제거 때문에 g만
  // let regexAllCase = new RegExp(pattern, "gi"); // 대소문자 구분 없이 모든 패턴을 찾음
  // 만약 대소문자 구분안하고 모든문자 제거인 경우 'gi'
  //let regexAll = new RegExp(pattern, "g"); // 모든 패턴을 찾음
  // replace에 변수 넣기 (RegExp 객체 사용하기)
  // https://cookinghoil.tistory.com/95
  var regex = new RegExp(letter, 'g');

  answer = my_string.replace(regex, "");
  return answer;
}
console.log(solution('AaBbCcDdEE', 'a'));