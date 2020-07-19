// Node package for reading and writing files
var fs  = require("fs");

//2

fs.writeFile("movies.txt","Inception,Die Hard",function(err){

// If ther were any errors
if (err){
   return console.log(err); 
}

console.log("file updated");

});