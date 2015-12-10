# PrimID
Transform your internal id's to obfuscated integers based hashes.
This has the advantage that is is incredibly fast compared to other methods.

PrimID is written in pure javascript.

# Installation
`npm install primid`

# Methods
PrimID uses only three functions.
```javascript
var primid=require("primid");
// Get a new generator using desired settings (should be unique settings per application).
// These should be prime numbers!
var generator=primid(prime,inverse[,xor]);

// Encode a number, get a integer based hash
var hash=generator.encode(some_number);

// Decode a hash, get back a number
var number=generator.decode(hash);
```

# Numbers
You need to pick your own prime numbers unique to your application. For suggestions, look at [this list](http://primes.utm.edu/lists/small/millions/).

# Usage
1. Create a new `primid` instance using
```javascript
var primid = require('primid');
var generator = primid(1580030173, 59260789, 1163945558);
```
2. Generate a hash, in this example we want to obfruscate the value `15`
```javascript
let hash=generator.encode(15);
```
3. Use the hash as output of your API or other system.
4. Turn the hash back into a number. If the hash from the example above is used, then `id` is equal to `15`.
```javascript
let id=generator.decode(hash);
```
