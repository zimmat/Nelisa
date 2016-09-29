module.exports = function(quantityData) {
  var mostPopular = {};
  var week = Object.keys(quantityData).map(function(key) {
    return quantityData[key];
  });
  var max = Math.max.apply(null, week);
  for (var category in quantityData) {
    if (quantityData[category] === max) {
      max = quantityData[category];
      mostPopular = {
        description:"Most popular category ",
        name: category,
      quantity:(max)

    };
  }
}
// console.log(mostPopular);
  return mostPopular;
}
