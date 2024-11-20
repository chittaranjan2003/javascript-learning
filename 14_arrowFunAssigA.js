

//1.

let day=()=>{
    console.log(`Good morning Today is TuesDay`);
}
day();


//2.
let mul=(n1, n2 ,n3=1)=>{
    let res=n1* n2 *n3;
    console.log(`Result is : ${res}`);
}
mul(5,5,2);


//2.1 default value
mul(10,4);

//3.1
let add=(n1, n2, n3, n4 ,n5)=>
{
    let Result=n1+ n2 + n3 + n4 +n5;
    return Result;
}
let addNumbers=add(100,100,200,349,756);
console.log(`Addition five numbers result is : ${addNumbers}`);
let addStrings=add("iam" ," Learning ", " ES6 ", " features "," in depth")
console.log(`Add Strings is :${addStrings}`);








