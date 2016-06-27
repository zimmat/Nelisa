module.exports = function(quantityData) {
  leastPopular = {};
  var week = Object.keys(quantityData).map(function(key) {
    return quantityData[key];
  });
  var min = Math.min.apply(null, week);
  for (var category in quantityData) {
    if (quantityData[category] === min) {
      min = quantityData[category];
      leastPopular = {
        category: category,
        quantity:(min)
      };

    }
  }
  console.log(leastPopular);
  return leastPopular;
}
