function bmi() {
    // get feet & inches value
    let feet = document.querySelector(".feet").value;
    let inch = document.querySelector(".inch").value;
    // Merge feet & inches value in one
    let metre = feet + "." + inch;
    // feet to metre conversation & get the height in metre
    let height = metre * 0.3048;
    // get weight value
    let weight = document.querySelector(".weight").value;
    // BMI Calculation
    let bmi = weight / Math.pow(height, 2);
    // BMI showing in p tag with condition
    console.log(bmi);
    if(bmi<18.5){
        document.querySelector("p").innerHTML = "Your Body Mass Index(BMI) is:- "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is Under Weight";
    }
    else if(bmi>=18.5 && bmi<25){
        document.querySelector("p").innerHTML = "Your Body Mass Index(BMI) is:- "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is Normal & It's Healthy";
    }
    else if(bmi>=25 && bmi<30){
        document.querySelector("p").innerHTML = "Your Body Mass Index(BMI) is:- "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is in over Weight";
    }
    else if(bmi>30){
        document.querySelector("p").innerHTML = "Your Body Mass Index(BMI) is:- "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is in Obesity";
    }
}
// Click event fire on calculate button
document.querySelector(".btn").addEventListener("click", bmi);