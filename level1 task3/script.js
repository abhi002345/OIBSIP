function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var convertedTemperature;
    var unitDisplay;
  
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    if (unit === "celsius") {
      convertedTemperature = (temperatureInput * 9) / 5 + 32;
      unitDisplay = "°F";
    } else if (unit === "fahrenheit") {
      convertedTemperature = ((temperatureInput - 32) * 5) / 9;
      unitDisplay = "°C";
    } else if (unit === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) - 273.15;
      unitDisplay = "°C";
    }
  
    document.getElementById("result").innerHTML =
      "Converted Temperature: " +
      convertedTemperature.toFixed(2) +
      " " +
      unitDisplay;
  }