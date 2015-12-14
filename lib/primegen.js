/* GLOBAL */
const MAX_INT = 2147483647;
const bigint = require("big-integer");

/* OBJECT */
var Primegen = function(prime,inverse,xor){
  "use strict";

  if (typeof prime != 'number' || typeof inverse != 'number'){
    throw (new Error('`prime` and `inverse` are required to be numbers.'));
  }

  this.prime=bigint(prime);
  this.inverse=bigint(inverse);
  this.xor= bigint((typeof xor == 'number') ? xor : 0);

};

/* PROTOTYPE FUNCTIONS */
Primegen.prototype.encode = function(value){
  "use strict";

  if (typeof value != 'number') throw (new Error("`value` has to be a number"));

  return bigint(value).multiply(this.prime).and(MAX_INT).xor(this.xor).valueOf();
};

Primegen.prototype.decode = function(value){
  "use strict";

  if (typeof value != 'number') throw (new Error("`value` has to be a number"));

  return bigint(value).xor(this.xor).multiply(this.inverse).and(MAX_INT).valueOf();
};

/* EXPORTING */
module.exports = exports = Primegen;
