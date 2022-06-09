//units to be converted
let unitVariable = prompt("Input a value");
// let unitVariable = parseInt(document.getElementById("form-value").value);
// let formValue = parseInt(document.getElementById("form-value").value);

//elemet id's assigned to variables
let conversionUnit = document.getElementById("unit-to-convert");
let lengthConversion = document.getElementById("length-conversion");
let volumeConversion = document.getElementById("volume-conversion");
let massConversion = document.getElementById("mass-conversion");

//conversion calculations
//Length
let metersToFeet = (unitVariable * 3.281).toFixed(3);
let feetToMeters = (unitVariable / 3.281).toFixed(3);
//Volume
let litersToGallons = (unitVariable / 3.785).toFixed(3);
let gallonsToLiters = (unitVariable * 3.785).toFixed(3);
//Mass
let kilosToPounds = (unitVariable * 2.205).toFixed(3);
let poundsToKilos = (unitVariable / 2.205).toFixed(3);

//function that changes html text content of id's assigned variables
function unitConvert() {
    //assign units to header
    conversionUnit.textContent = unitVariable;
    //length conversion
    lengthConversion.textContent = unitVariable +" meters = " + metersToFeet + " feet | " + unitVariable + " feet = " + feetToMeters + " meters";
    //volume conversion
    volumeConversion.textContent = unitVariable +" liters = " + litersToGallons + " gallons | " + unitVariable + " gallons = " + gallonsToLiters + " liters";
    //mass conversion
    massConversion.textContent = unitVariable +" kilos = " + kilosToPounds + " pounds | " + unitVariable + " pounds = " + poundsToKilos + " kilos";
}

//calling unit conversion function
unitConvert();











