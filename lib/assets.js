const getAssets = () => {
  $('.listed-coin').html('');

  fetch(`https://guarded-reef-25579.herokuapp.com/api/v1/assets`)
    .then(response => response.json())
    .then(assets => appendAssets(assets))
    .catch(error => console.error({ error }));
};

const appendAssets = (assets) => {
  assets.forEach(asset => {
    appendAsset(asset);
  });
};

const appendAsset = (asset) => {
  $('.wrapper').append(`
    <div class="listed-coin">
      <p class="rank">${asset.rank}</p>
      <p class="symbol">${asset.symbol}</p>
      <p class="name">${asset.name}</p>
      <p class="price">$${Math.round(asset.price_usd * 10000)/ 10000}</p>
    </div>
  `);
};

getAssets();
