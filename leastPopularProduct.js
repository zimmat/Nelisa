module.exports = function(quantityData) {
  leastPopular = {};
  var week = Object.keys(quantityData).map(function(key) {
    return quantityData[key];
  });
  var min = Math.min.apply(null, week);
  for (var product in quantityData) {
    if (quantityData[product] === min) {
      min = quantityData[product];
      leastPopular = {
        product: product,
        quantity:(min)
      };

    }
  }
  console.log(leastPopular);
  return leastPopular;
}
