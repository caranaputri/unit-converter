/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// get the input value
const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-btn")
const clearEl = document.getElementById("clear-btn")

// output elements
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

// conversion factors
const toFeet = 3.281
const toGallon = 0.264
const toPound = 2.204

// conversion function after convert button is clicked
convertEl.addEventListener("click", function() {
    const inputValue = inputEl.value

    const feetResult = (inputValue * toFeet).toFixed(3)
    const meterResult = (inputValue / toFeet).toFixed(3)
    lengthEl.innerHTML = `${inputValue} meters = ${feetResult} feet | ${inputValue} feet = ${meterResult} meters`

    const gallonResult = (inputValue * toGallon).toFixed(3)
    const literResult = (inputValue / toGallon).toFixed(3)
    volumeEl.innerHTML = `${inputValue} liters = ${gallonResult} gallons | ${inputValue} gallons = ${literResult} liters`

    const poundResult = (inputValue * toPound).toFixed(3)
    const kilogramResult = (inputValue / toPound).toFixed(3)
    massEl.innerHTML = `${inputValue} kilograms = ${poundResult} pounds | ${inputValue} pounds = ${kilogramResult} kilograms`
})

// clear the input and output when clear button is clicked
clearEl.addEventListener("click", function(){
    inputEl.value = ""
    const resultEl = document.getElementsByClassName("result")
    for (let i = 0; i < resultEl.length; i++) {
        resultEl[i].innerHTML = "Please enter a value"
    }

})

// theme button

let darkmode = localStorage.getItem("darkmode")
const themeBtn = document.getElementById("theme-btn")

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") {
    enableDarkMode()
}

themeBtn.addEventListener("click", function() {
    darkmode = localStorage.getItem("darkmode")
    if (darkmode !== "active") {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})