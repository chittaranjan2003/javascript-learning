class Vehicle {
  //data member
  //constructor
  constructor(modelName, fuelType, manufacturingYear, color, milage) {
    this.modelName = modelName;
    this.fuelType = fuelType;
    this.manufacturingYear = manufacturingYear;
    this.milage = milage;
  }

  Details() {
    console.log(`ModelName is: ${this.modelName}`);
    console.log(`Fuel Type is :${this.fuelType}`);
    console.log(`Manufacturing Year is: ${this.manufacturingYear}`);
    console.log(`Milage is: ${this.milage}`);
  }
}

const VehicleCar = new Vehicle("BMW", "petrol", 2021, "Black", 7);
VehicleCar.Details();
console.log("===============================");


const VehicleCar2 = new Vehicle("Ferrari Testarossa", "Diesel", 2018, "Red", 5);
VehicleCar2.Details();
console.log("===============================");
const VehicleCar3 = new Vehicle("MarutiSuzuki Brezza", "petrol", 2021, "Blue", 12);
VehicleCar3.Details();
console.log("===============================");
const VehicleCar4 = new Vehicle("BMW", "petrol", 2021, "Black", 7);
VehicleCar4.Details();
console.log("===============================");
const VehicleCar5 = new Vehicle("Tata Punch", "petrol", 2021, "White", 7);
VehicleCar5.Details();

class Collage{
    constructor(collageName,totalCollageMember,totalStudent,totalClassRoom,totalBranch){
        this.collageName=collageName;
        this.totalCollageMember=totalCollageMember;
        this.totalStudent=totalStudent;
        this.totalClassRoom=totalClassRoom;
        this.totalBranch=totalBranch;

    }
    Details(){
        console.log(`Collage Name is :${this.collageName}`);
        console.log(`Total collage members  is :${this.totalCollageMember}`);
        console.log(`Total collage students is :${this.totalStudent}`);
        console.log(`Total class room in collage  is :${this.totalClassRoom}`);
        console.log(`Total branch in collage is :${this.totalBranch}`);
        
    }
}
console.log("==================");


const CollageName=new Collage("Niis",500,5000,200,10);
CollageName.Details();

console.log("==================");

const CollageName2=new Collage("Gita",1000,10000,400,10);
CollageName2.Details();

console.log("==================");

const CollageName3=new Collage("Gandhi institute",1000,10000,400,10);
CollageName3.Details();






