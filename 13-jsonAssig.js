const person=`{
"name":"Aleix Melon",
"id":"E00245",
"role":["Dev","DBA"],
"age":23,
"doj":"11-12-2019",
"married":false,
"address":{
"street":"32, Laham St.",
"city":"Innsbruck",
"country":"Austria"
},
"referred-by":"E0012"

}`
const personDataInObj=JSON.parse(person);
console.log(personDataInObj);
console.log(personDataInObj.role[0]);
let lastName=personDataInObj.name.split(" ");
console.log(lastName[1]);
const doj=personDataInObj.doj;
const dojArray=doj.split("-");
const lastValue=dojArray[dojArray.length-1];
console.log(lastValue);











