console.log("Witam wszystkich!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-form__pln");
let currencyElement = document.querySelector(".js-form__currency");
let resultElement = document.querySelector(".js-form__sum");

let rateEUR = 4.69;
let rateUSD = 4.39;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;
    case "USD":
      result = amount / rateUSD;
      break;
  }

  resultElement.innerText = result.toFixed(2);
});
