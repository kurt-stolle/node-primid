const generator=require('./lib/index.js')(2123809381, 1885413229, 146808189);

console.log("Running test...");

const testValues = [1,2,3,4,5,1203,13,64,9218,483294,192380];
for (var i=0; i < testValues.length; i++){
  var enc=generator.encode(testValues[i]);
  var dec=generator.decode(enc);
  console.log(String(testValues[i]) + " -> " + String(enc) + " -> " + String(dec));
}
