let professor={

    degrees:{
        Engineering:"CSC",
        PHD:"Adv Computing"
    },
    Certificates:["Hacker Rank Participation","Certification in IFE course","Certification in Adv programming"]

};
professor.FullName="Elon Musk";
professor.age=45;
professor.city="Mumbai";
professor.gender="Male";
professor.isMarried=true;
console.log(professor);
console.log(professor.degrees);
console.log(professor.Certificates);
professor.totalExperience="14 years";
console.log(professor.totalExperience);
professor.isMarried=false;
console.log(professor.isMarried);
professor.Certificates.splice(2,0,"Oracle Certified");
console.log(professor.Certificates);
console.log(`Last Element in array is ${professor.Certificates[professor.Certificates.length-1]}`);

const arrayCertificates=professor.Certificates;

for (const element of arrayCertificates) {
    console.log(element);
    
    
}


