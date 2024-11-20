



//1.

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("====== element ========");

arrayNumbers.map((element) => {
  console.log(`Element is ${element}`);
});



//2.
console.log("=========Cube of Element=============");

arrayNumbers.map((element) => {
  let cube = element * element * element;
  console.log(`Element cube is : ${cube}`);
});



//3.

 console.log("==========index multiple into Element===========");
 let newArray=[];
 newArray=arrayNumbers.map((element,index)=>{
        return element * index;
});
console.log(`New array is :`);
console.log(newArray);



