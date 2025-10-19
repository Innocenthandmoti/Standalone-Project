document.addEventListener(`DOMContentLoaded`, function () {
  document
    .getElementById(`convert__button`)
    .addEventListener(`click`, convert__temperature);
});

function convert__temperature() {
  const temp__input = document.getElementById(`temperature__input`).value;
  const from__unit = document.getElementById(`from__unit`).value;
  const to__unit = document.getElementById(`to__unit`).value;

  // Validating iput
  if (temp__input === `` || isNaN(temp__input)) {
    alert(`Please enter a valid number for the temperature.`);
    return;
  }

  const value = parseFloat(temp__input);

  //convert to Celsius as intermediate
  const celsius = to__celsius(value, from__unit);

  // Convert to target unit
  const result = from__celsius(celsius, to__unit);

  // Display main result
  const main__result = document.getElementById(`main__result`);
  main__result.innerHTML = `<strong>${value.toFixed(2)} ${getUnitSymbol(
    from__unit
  )}</strong> is <strong>${result.toFixed(2)} ${getUnitSymbol(
    to__unit
  )} </strong>.`;

  // Display all equivalent temperatures
  displayAllUnits(celsius);

  // Show results panel
  document.getElementById(`results`).style.display = `block`;
}

function to__celsius(value, from__unit) {
  if (from__unit === `celsius`) return value;
  if (from__unit === `fahrenheit`) return ((value - 32) * 5) / 9;
  if (from__unit === `kelvin`) return value - 273.15;
}

function from__celsius(value, to__unit) {
  if (to__unit === `celsius`) return value;
  if (to__unit === `fahrenheit`) return (value * 9) / 5 + 32;
  if (to__unit == `kelvin`) return value + 273.15;
}

function getUnitSymbol(unit) {
  if (unit === `celsius`) return `°C`;
  if (unit === `fahrenheit`) return `°F`;
  if (unit === `kelvin`) return `K`;
}

function displayAllUnits(celsius) {
  const fahrenheit = from__celsius(celsius, `fahrenheit`);
  const kelvin = from__celsius(celsius, `kelvin`);

  document.getElementById(`celsius`).innerHTML = `Celsius:${celsius.toFixed(
    2
  )} °C`;
  document.getElementById(
    `fahrenheit`
  ).innerHTML = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById(`kelvin`).innerHTML = `Kelvin: ${kelvin.toFixed(
    2
  )} K`;
}
