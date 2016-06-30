module.exports = function(quantityData) {
  var mostPopular = {};
  var week = Object.keys(quantityData).map(function(key) {
    return quantityData[key];
  });
  var max = Math.max.apply(null, week);
  for (var product in quantityData) {
    if (quantityData[product] === max) {
      max = quantityData[product];
      mostPopular = {
        description:"most popular product ",
        name: product,
      quantity:(max)

    };
  }
}
// console.log(mostPopular);
  return mostPopular;
}
