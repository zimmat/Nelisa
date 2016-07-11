module.exports = function(catProfitData) {
  var mostProfitableCategory = {};
  var week = Object.keys(catProfitData).map(function(key) {
    return catProfitData[key];
  });
  var max = Math.max.apply(null, week);
  for (var cat in catProfitData) {
    if (catProfitData[cat] === max) {
      max = catProfitData[cat];
      mostProfitableCategory = {
        description: "most profitable category",
        name: cat,
        profit:(max).toFixed(2).replace('','R')
      };

    }
  }
  return mostProfitableCategory;
}
