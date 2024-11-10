let array = [10, 20, 45, 30, 77, 60];
let count1 = 0;
for (const element of array) {
  if (element % 2 == 0) {
    count1 = count1 + 1;
  }
}
console.log(`Given array Even Number is :${count1}`);

const myLove = "I Love only javaScript";
const vowels = "aeiou";
let count2 = 0;
for (const char of myLove) {
  if (vowels.includes(char.toLowerCase())) {
    count2 = count2 + 1;
  }
}
console.log(`Vowels count is: ${count2}`);

const sentence = "JAVASCRIPT LANGUAGE";
let count3 = 0;
for (const char of sentence) {
  if (char.toLocaleLowerCase() == "a") 
    count3 = count3 + 1;
}
console.log(`Total character a is ${count3}`);
