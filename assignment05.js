function squareOfWordLength(str1) {
  var str1 = str1.length;
  var str2 = str1 * str1;
  return str2;
}
var res = squareOfWordLength("JavaScript");
console.log(`Given string is javaScript and square of word is :${res}`);
var res = squareOfWordLength("Google Chrome");
console.log(`Given string is Google Chrome and square of word is :${res}`);
var res = squareOfWordLength("Web Developer Smart");
console.log(
  `Given string is Web Developer Smart and square of word is :${res}`
);

function stringOperation(str) {
  var strLength = str.length;
  var word = str.split(" ");
  var totalWord = word.length;
  var strDivision = strLength / totalWord;
  console.log(` Given string division is :${strDivision}`);
  var strMul = strLength * totalWord;
  console.log(` Given string Multiplication is :${strMul}`);
}
stringOperation("I am Angular Developer");
