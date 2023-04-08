{
  const welcome = () => {
    console.log("Witam wszystkich!");
  };

  welcome();

  const calculateResult = (amount, currency) => {
    const rateEUR = 4.69;
    const rateUSD = 4.39;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-form__sum");
    resultElement.innerText = result.toFixed(2);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-form__pln");
    const currencyElement = document.querySelector(".js-form__currency");
    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(+amountElement.value, currencyElement.value);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
