var bandList = require("./bands.js");

// Loop through band
if(process.argv[2]){
var genre = process.argv[2];
}

console.log("Parametros: " + process.argv);

for (var key in bandList){

if (key === genre || genre === undefined) {

    console.log(`A ${key} band is ${bandList[key]} .  `)
}
}
