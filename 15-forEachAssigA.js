

//1.
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((value, index) => {
  console.log(`Element is :${value}    index is :${index}`);
});




//2.
console.log(`===============2. positive Numbers===============`);

arrayNumbers.forEach((element) => {
  if (element>=0) {
    console.log(`Positive Numbers is :${element}`);
  }
});


//3.
console.log(`===============3. Negative Numbers===============`);
const negativeNumbers=[];
arrayNumbers.forEach((element)=>{
    if (element<0) {
        negativeNumbers.push(element);
    }
});
console.log(`Negative Number is :`);
console.log(negativeNumbers);


//4.
arrayNumbers.forEach((element)=>{
  
  if (element%2 == 0) {
    console.log(`Even Numbers is : ${element}`);
    
  }
});


//5.
let sum=0;
arrayNumbers.forEach((element)=>{

      sum=sum+element;
      
});
console.log(sum);

//6.

arrayNumbers.forEach((element,index)=>{

      if (index%2 ==0) {
        console.log(`Even Index is :${index} Element is: ${element}`);
        
        
      }

})