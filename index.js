const textbox = document.getElementById("textbox");
const toKelvin = document.getElementById("toKelvin");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");

function convert(){
    if(toCelcius1.checked){
        let kelvin = Number(textbox.value);
        let celcius = kelvin - 273.15;
        result.textContent = `${celcius.toFixed(2)}°C`;
    }
    else if(toKelvin.checked){
        let celcius = Number(textbox.value);
        let kelvin = celcius + 273.15;
        result.textContent = `${kelvin.toFixed(2)}K`;
    }
    else if(toFahrenheit.checked){
        let celcius = Number(textbox.value);
        let fahrenheit = celcius * 9 / 5 + 32;
        result.textContent = `${fahrenheit.toFixed(2)}F`;
    }
    else if(toCelcius2.checked){
        let fahrenheit = Number(textbox.value);
        let celcius = (fahrenheit - 32) * 5 / 9;
        result.textContent = `${celcius.toFixed(2)}°C`;
    }
    else{
        result.textContent = "Please select a valid unit";
    }
}