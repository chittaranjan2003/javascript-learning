let array = [10, 20, 45, 30, 77, 60];
for (const element of array) {
  if (element % 2 == 1) {
    console.log(`Given array Even Number is :${element}`);
  }
}

const myLove = "I Love only javaScript";
const vowels = "aeiou";
let count =0;
for (const char of myLove) {
  if (vowels.includes(char.toLowerCase())) {
    count = count + 1;
  }
}
console.log(`Vowels count is: ${count}`);
const sentence="JAVASCRIPT LANGUAGE";
let count2=0;
for (const char of sentence) {
    if(char.toLocaleLowerCase()=="a")
    count2=count2+1;
    
}
console.log(`Total character a is ${count2}`);
