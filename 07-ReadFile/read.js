var fs = require("fs");


fs.readFile("movies.txt","utf8",(error,data) =>{

if (error) {
return console.log(error);
}

// data <-- my data

console.log(data);

var dataArr = data.split(",");

console.log(dataArr);

})