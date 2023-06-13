function add7(addNumber) {
  addNumber = addNumber + 7;
  return addNumber;
}

console.log(add7(5));

function multiplier(num1, num2) {
  return num1 * num2;
}

console.log(multiplier(4, 2));

function capitalize(myString) {
  let allLowerCase = myString.toLowerCase();
  let firstLetterCap =
    allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
  return firstLetterCap;
}
console.log(capitalize("DEV Island is opening DOORS to tHe Future"));

function lastLetter(anotherString) {
  return anotherString.slice(-1);
}

console.log(lastLetter("abcd"));
