# PrimID
Transform your internal id's to obfuscated integers based hashes.
This has the advantage that is is incredibly fast compared to other methods.

PrimID is written in pure javascript.

# Numbers
You need to pick your own prime numbers unique to your application. For suggestions, look at [this list](http://primes.utm.edu/lists/small/millions/).

# Methods
PrimID uses only three functions.
```text/javascript
var primid=require("primid");

var generator=primid(prime,inverse[,xor]); // Get a new generator using desired settings (should be unique settings per application). These should be prime numbers!
var hash=generator.encode(some_number); // Encode a number, get a integer based hash
var number=generator.decode(hash); // Decode a hash, get back a number
```

# Usage
1. Create a new `primid` instance using
```text/javascript
var primid = require('primid');
var generator = primid(1580030173, 59260789, 1163945558);
...
```
2. Generate a hash
```text/javascript
...
let hash=generator.encode(15);
console.log("Hash of 15 is "+hash);
...
```
3. Use the hash as output of your API or other system.
4. Turn the hash back into an id internally
```text/javascript
...
let id=generator.decode(hash);
console.log("Hash of 15 is "+hash+" and translates back to "+id"); // "Hash of 15 is xyz and translates back to 15"
...
```
