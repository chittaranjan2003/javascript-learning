let fruitsSeasonal=["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`First Index : ${fruitsSeasonal[0]}`);
 let last=fruitsSeasonal[fruitsSeasonal.length-1]
 console.log(last);
fruitsSeasonal.unshift("Papaya");
console.log(fruitsSeasonal);
fruitsSeasonal.splice(4,1);
console.log(fruitsSeasonal);
fruitsSeasonal.push("Pineapple");
console.log(fruitsSeasonal);
fruitsSeasonal.splice(4,0,"Dragon Fruit");
console.log(fruitsSeasonal);
fruitsSeasonal.splice(2,1,"Kiwi");
console.log(fruitsSeasonal);
let fruitsSeasonal2=fruitsSeasonal.slice(1,5);
console.log(fruitsSeasonal2);
let LstElement=fruitsSeasonal2[fruitsSeasonal2.length-3];
console.log(LstElement);





 