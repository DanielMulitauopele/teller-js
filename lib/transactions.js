const getTransactions = () => {
  $('.transactions').html('');
  fetch(`https://guarded-reef-25579.herokuapp.com/api/v1/transactions`)
    .then(response => response.json())
    .then(transactions => appendTransactions(transactions))
    .catch(error => console.error({ error }));
};

const appendTransactions = (transactions) => {
  transactions.forEach(transaction => {
    appendTransaction(transaction);
  });
};

const appendTransaction = (transaction) => {
  $('.wrapper').append(`
    <div class="transactions">
      <p class="currency-in">${transaction.currency_in}</p>
      <p class="currency-out">${transaction.currency_out}</p>
      <p class="amount">${Math.round(transaction.amount * 100)/ 100}</p>
      <p class="timestamp">${timestampFormatter(transaction.timestamp)}</p>
    </div>
  `);
};

const timestampFormatter = (timestamp) => {
  let converted = new Date(timestamp * 1000)
  let date = converted.toLocaleDateString();
  let time = converted.toLocaleTimeString();

  return date + "\r\n" + time
};

getTransactions();
