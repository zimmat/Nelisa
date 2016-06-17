module.exports = function(salesData) {
  var mostPopular = [];
  var week = Object.keys(salesData).map(function(key) {
    return salesData[key];
  });
  var max = Math.max.apply(null, week);
  for (var product in salesData) {
    if (salesData[product] === max) {
      mostPopular.push(product);

    }
  }
  return mostPopular;
}
