
function stringHandsOn(){
    var str1="   Hey you are doing good, keep it up   ";
    console.log(str1);
    console.log(`Length of the string is :${str1.length}`);
    var trimStr=str1.trim();
    console.log(`After trim ${trimStr}`);
    console.log(`First char: ${trimStr.charAt(0)} and last char ${trimStr.charAt(trimStr.length-1)}`);
    var spTrimStr=trimStr.split(" ");
    console.log(`world length : ${spTrimStr.length}`);
    var indexOfStr=trimStr.indexOf("good");
    console.log(`index of good is : ${indexOfStr}`);
    var substring=trimStr.substring(22);
    console.log(`Substring is : ${substring}`);
    var checkStart=trimStr.startsWith("Hey");
    var checkEnd=trimStr.endsWith("up");
    console.log(`Start with :${checkStart}`);
    console.log(`End with :${checkEnd}`);
}
stringHandsOn();

