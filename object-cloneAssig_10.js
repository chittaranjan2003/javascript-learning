let sbi={
    BankName:"BhubaneswarSBI",
    totalMembers:15,
    ifc:1236789,
    Bankacountno:567890123

}
let bankLocation={
    BankLocation:"Bhubaneswar,baramunda",
    pin:754153,
    street:"Odisha",
    city:"Bhubaneswar"
}
console.log("Bank Name is:");
console.log(sbi);
console.log("Bank Location is:");
console.log(bankLocation);

const bankDetails=Object.assign({},sbi,bankLocation);
console.log("Bank Details is:");
console.log(bankDetails);

let rateOfInterest={
    homeLoanInterest:"10%",
    personalLoanInterest:"5%",
    dueInterest:"15%"
}
console.log("Bank some Interest Details is:");

console.log(rateOfInterest);

const sbiDetails=Object.assign({},bankDetails);
console.log("SBI Bank Details is :");
console.log(sbiDetails);

for (const key in sbiDetails) {
    if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(key,element);
        
        
    }
}


