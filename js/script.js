{
  const welcome = () => {
    console.log("Witam wszystkich!");
  };

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
    const resultElement = document.querySelector(".js-sum");
    resultElement.innerText = result.toFixed(2);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

    welcome();
  };

  init();
}
