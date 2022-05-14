//WRITE YOUR CODE BELOW

// First Drink Order Info
var customerOrder = {
    drinkName: "London Fog",
    sugarNum: 2,
    isReady: true,
}

// Second Drink Order Info
var customerOrder2 = {
    drinkName: "Caramel Cowboy",
    sugarNum: 1,
    isReady: false,
}

//Logs 1st order drinkName //
console.log(customerOrder.drinkName);
// Logs # of sugars in drink in 1st order //
console.log(customerOrder.sugarNum);
//Logs status of drink in 1st order //
if (customerOrder.isReady === true) {
    console.log("Ready for pick-up")}

else {
    console.log("Still in queue")
}


//Logs 2nd order drinkName //
console.log(customerOrder2.drinkName);
// Logs # of sugars in drink in 2nd order //
console.log(customerOrder2.sugarNum);
//Logs status of drink in 2nd order //
if (customerOrder2.isReady === true) {
    console.log("Ready for pick-up")}

else {
    console.log("Still in queue")
}
