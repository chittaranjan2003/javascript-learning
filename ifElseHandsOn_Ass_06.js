var evenodd = function (number) {
  if (number % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd";
  }
};

//q-2
var checkNo = evenodd(4);
console.log(`Given Number is ${checkNo}`);

function checkAge(age) {
  if (age >= 18) {
    console.log(`Your Eligible for vote :`);
  } else {
    console.log(`Your Not Eligible for vote :`);
  }
}
checkAge(20);

//q-3
var checkString = function (str) {
  if (str.length >= 10) {
    console.log(`Given string is more than 10 character : ${str} `);
  } else {
    console.log(`Given string is leas than 10 character: ${str}`);
  }
};
checkString("JavaScript Language ");
checkString("programming Language");
checkString("Ram");

//q-4

function checkString2(str2, str3) {
  if (str2.startsWith(str3)) {
    console.log(`Your String is start with ${str3} :`);
  } else {
    console.log(`Your String is Not start with ${str3}:`);
  }
}
checkString2("javaScript Language", "java");
checkString2("programming Language", "programming");
