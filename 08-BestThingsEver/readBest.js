var fs = require("fs");


fs.readFile("best_things_ever.txt","utf8", (err,data) => {

if (err) {
 return console.log(err);
}

var output = data.split(",");


for (var i = 0; i< output.length;i++){
console.log(output[i]);
}


});