module.exports = function(obj) {
  leastPopular = [];
  var week = Object.keys(obj).map(function(key) {
    return obj[key];
  });
  var min = Math.min.apply(null, week);
  for (var product in obj) {
    if (obj[product] === min) {
      leastPopular.push(product);

    }
  }
  //console.log(leastPopular);
  return leastPopular;
}
