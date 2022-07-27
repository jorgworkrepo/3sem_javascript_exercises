"use strict";

let countryCode = "";
let countries = [];
let table = [];

const svg = document.querySelector("#parent");
const reset = document.querySelector("#btn");
const list = document.querySelector("#countryInfo");

document.querySelector("#ocean").style.fill = "lightblue";
document.querySelectorAll("path").forEach((el) => (el.style.fill = "green"));

reset.addEventListener("click", () => {
  const reset = document.querySelectorAll("path");
  countries = [];

  // reset country info tag
  document.querySelector("#countryInfo").innerHTML = "";

  reset.forEach((el) => {
    el.style.fill = "green";
  });
});

const getCountries = (countryCode) => {
  fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then((response) => response.json())
    .then((data) => {
      data.countryCode = countryCode;
      countries.push(data);
      showTable();
    });
};

const showTable = () => {
  table = countries.map((el) => {
    console.log(el);
    return `
        <tr>
         <td>${el[0].name.common}</td>
         <td>${el[0].population}</td>
         <td>${el[0].capital[0]}</td>
         <td>${el[0].area}</td>
         <td>${el[0].continents[0]}</td>
        </tr>
         `;
  });
  table.unshift(
    "<thead><tr><th>Country</th><th>Population</th><th>Capitol</th><th>Area</th><th>Continent</th></tr></thead><tbody>"
  );
  table = table.join("");
  //table.push(`<button id="btn">RESET</button>`)
  list.innerHTML = table;
};

svg.addEventListener("click", (event) => {
  // get country code
  countryCode = event.target.id;
  console.log(countryCode);

  // get style tag from country
  const countryInfo = document.querySelector(`#${countryCode}`);
  // which color has the country
  const countryColor = countryInfo.style.fill;
  // toggle country color from grey to red
  if (countryCode !== "ocean") {
    countryInfo.style.fill = countryColor == "green" ? "red" : "green";
  }

  if (countryColor !== "red" && countryCode !== "ocean") {
    getCountries(countryCode);
  }
});
