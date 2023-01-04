const form = document.querySelector("#quote-form");
const vehicleType = document.querySelector("#vehicle-type");
const vehicleYear = document.querySelector("#vehicle-year");
const drivingHistory = document.querySelector("#driving-history");
const quoteResult = document.querySelector("#quote-result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate form input
  if (
    vehicleType.value === "" ||
    vehicleYear.value === "" ||
    drivingHistory.value === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

   // Calculate base premium
  let premium = 0;
  if (vehicleType.value === "car") {
    premium = 1000;
  } else if (vehicleType.value === "truck") {
    premium = 2000;
  } else if (vehicleType.value === "bus") {
    premium = 1500;
  } else if (vehicleType.value === "off_road") {
    premium = 2500;
  } else if (vehicleType.value === "electric") {
    premium = 800;
  } else if (vehicleType.value === "autonomous") {
    premium = 3000;
  } else {
    premium = 500;
  }

  // Calculate age surcharge
  const ageSurcharge = (2022 - vehicleYear.value) * 20;
  premium += ageSurcharge;

  // Calculate driving history surcharge
  let historySurcharge = 0;
  if (drivingHistory.value.indexOf("accident") !== -1) {
    historySurcharge += 500;
  }
  if (drivingHistory.value.indexOf("speeding ticket") !== -1) {
    historySurcharge += 200;
  }
  premium += historySurcharge;

  // Calculate acceptance probability
  let acceptanceProbability = 100;
  if (ageSurcharge > 1000) {
    acceptanceProbability -= 10;
  }
  if (historySurcharge > 500) {
    acceptanceProbability -= 25;
  }

  // Display quote
  quoteResult.innerHTML = `
    <h2>Quote Result</h2>
    <p>Base Premium: $${premium}</p>
    <p>Age Surcharge: $${ageSurcharge}</p>
    <p>History Surcharge: $${historySurcharge}</p>
    <p>Total Premium: $${premium + ageSurcharge + historySurcharge}</p>
    <
    ...
    <p>Acceptance Probability: ${acceptanceProbability}%</p>
      `;
});
