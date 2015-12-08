/* GLOBAL */
const MAX_INT = 2147483647;

/* OBJECT */
var Primegen = function(prime,inverse,xor){
  "use strict";

  if (typeof prime != 'number' || typeof inverse != 'number'){
    throw (new Error('`prime` and `inverse` are required to be numbers.'));
  }

  this.prime=prime;
  this.inverse=inverse;
  this.xor= (typeof xor == 'number') ? xor : 0;

};

/* PROTOTYPE FUNCTIONS */
Primegen.prototype.encode = function(value){
  "use strict";

  if (typeof value != 'number') throw (new Error("`value` has to be a number"));

  return ((value * this.prime) & MAX_INT) ^ this.xor;
};

Primegen.prototype.decode = function(value){
  "use strict";

  if (typeof value != 'number') throw (new Error("`value` has to be a number"));

  return ((value ^ this.xor) * this.inverse) & MAX_INT;
};

/* EXPORTING */
module.exports = exports = Primegen;
