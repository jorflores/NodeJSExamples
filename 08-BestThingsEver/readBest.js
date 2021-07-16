var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", (err,data)=> {

var output = data.split(",");

output.forEach(element => {
    console.log(element);
})


})