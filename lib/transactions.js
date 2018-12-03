const getExchanges = () => {
  $('.exchanges').html('');
  fetch(`https://guarded-reef-25579.herokuapp.com/api/v1/transactions`)
    .then(response => response.json())
    .then(exchanges => appendExchanges(exchanges))
    .catch(error => console.error({ error }));
};

const appendExchanges = (exchanges) => {
  exchanges.forEach(exchange => {
    appendExchange(exchange);
  });
};

const appendExchange = (exchange) => {
  $('.wrapper').append(`
    <div class="exchanges">
      <p class="name">${exchange.name}</p>
      <p class="volume">$${calculateValue(exchange.dollar_volume)}</p>
      <p class="trading-pairs">${exchange.available_pairs}</p>
    </div>
  `);
};

const calculateValue = (dollar_amount) => {
  if (dollar_amount >= 1.0e+9){
    return Math.round((dollar_amount / 1.0e+9) * 100)/100 + "b"
  } else if (dollar_amount >= 1.0e+6){
    return Math.round((dollar_amount / 1.0e+6) * 100)/100 + "m"
  } else if (dollar_amount >= 1.0e+3){
    return Math.round((dollar_amount / 1.0e+3) * 100)/100 + "k"
  } else {
    return (dollar_amount)
  }
}

getExchanges();
