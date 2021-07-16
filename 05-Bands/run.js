var bandList = require("./bands.js")

var search = process.argv[2];
console.log(search);


for (var genero in bandList ) {

    console.log(genero)
if (genero === search) {

console.log(`A ${genero} band is ${bandList[genero]}`)
}

}