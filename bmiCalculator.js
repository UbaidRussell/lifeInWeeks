function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "Your BMI is " + bmi;
    
    if (bmi < 18.5){
        interpretation = interpretation + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        interpretation = interpretation + ", so you have a normal weight.";
    } else {
        interpretation = interpretation + ", so you are overweight.";
    }
    
    return interpretation;
}
