const Primegen = require('./primegen.js');

module.exports = exports = function(prime,inverse,xor){
  return new Primegen(prime,inverse,xor);
};
