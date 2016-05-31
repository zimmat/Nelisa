var nelisa = require('../nelisa');
var assert = require('assert');

describe("ReadFolder", function() {
  it('should read file syncronously for week1', function() {
    var results = nelisa.getFiles('../week1');
    assert.equal(Array.isArray(results), true, 'results should be an array');
    assert.equal(14, results.length);
  });
  it('should read file syncronously for week2', function() {
    var results = nelisa.getFiles('../week2');
    assert.equal(Array.isArray(results), true, 'results should be an array');
    assert.equal(14, results.length);
  });
  it('should read file syncronously for week3', function() {
    var results = nelisa.getFiles('../week');
    assert.equal(Array.isArray(results), true, 'results should be an array');
    assert.equal(14, results.length);
  });
  it('should read file syncronously for week4', function() {
    var results = nelisa.getFiles('../week4');
    assert.equal(Array.isArray(results), true, 'results should be an array');
    assert.equal(14, results.length);
  });
});
