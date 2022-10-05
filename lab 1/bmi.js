class BMI {

    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    CalculateBMI(weight, height) {
        let bmi = this.weight/(this.height**2);
        console.log(bmi);
        return bmi;
    }
}

b1 = new BMI(1.8, 64);
b1.CalculateBMI();