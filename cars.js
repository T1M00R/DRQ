// parent class vehicle
class Vehicle{

    // constructor for vehicle class with three parameters
    constructor(make, model, year){

        this.make = make;
        this.model = model;
        this.year = year;


    }

    Information(){
        console.log("\n\nMake: " + this.make + "\nModel: " + this.model + "\nYear: " + this.year);
    }
}

// instantiating object and running class specific method
v1 = new Vehicle("Volkswagon", "Golf", 2010);
v1.Information();


// car class is a child of vehicle class
class Car extends Vehicle{

    constructor(make, model, year, doors){
        // use super to call the super class constructor
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        // This is how you call a super / parent method
        super.Information();
        console.log("Doors: " + this.doors);
    }


}

c1 = new Car("Toyota", "Avensis", 2002, 4);
c1.Information();