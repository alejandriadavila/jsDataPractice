//Set up the initial constants
const distance = 1500
const mpg55 = 30
const mpg60 = 28
const mpg75 = 23
const fuelCost = 3
const fuelBudget = 175

// How many gallons of fuel for the whole trip?
const gallons55 = distance / mpg55
const gallons60 = distance / mpg60
const gallons75 = distance / mpg75

// How much money would be spent on fuel? 
const fuelCost55 = gallons55 * fuelCost
const fuelCost60 = gallons60 * fuelCost
const fuelCost75 = gallons75 * fuelCost

// How long will the trip take in hours?
const tripHours55 = distance / 55
const tripHours60 = distance / 60
const tripHours75 = distance / 75

// Is the budget enough to cover the fuel cost & how long will the trip take?
console.log(`At 55 mph, the trip will take ${tripHours55} hours. Is the fuel cost over budget? ${fuelCost55 > fuelBudget}`)
console.log(`At 60 mph, the trip will take ${tripHours60} hours. Is the fuel cost over budget? ${fuelCost60 > fuelBudget}`)
console.log(`At 75 mph, the trip will take ${tripHours75} hours. Is the fuel cost over budget? ${fuelCost75 > fuelBudget}`)
