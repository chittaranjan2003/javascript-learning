

//1.
const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
arrayNumbers.filter((element)=>{

    if (element>=50) {
        console.log(`Grater than 50 Elements is : ${element}`);
           
    }

});

//2.
console.log("=========Even Numbers.==========");

arrayNumbers.filter((element)=>{
    if (element%2 ==0) {
        console.log(`Even Numbers is :${element}`);   
    }
});



//3.
console.log("=========Odd Numbers.==========");

arrayNumbers.filter((element)=>{
    if (element%2 != 0) {
        console.log(`Odd Numbers is: ${element}`);
    }
});

//4.
console.log("=========Multiple by 5 Numbers.==========");

arrayNumbers.filter((element)=>{
    if (element% 5 ==0) {
        console.log(`Multiple by 5 Elements is : ${element}`); 
    }
});

//5.
console.log("=========Numbers Between 20 to 50 .==========");
arrayNumbers.filter((element)=>{

    if (element>=20 && element<=50) {
        console.log(`Numbers are Between 20 to 50 is : ${element}`);
    }
});
