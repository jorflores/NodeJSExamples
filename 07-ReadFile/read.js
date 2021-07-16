var fs = require("fs");



fs.readFile("movies.txt", function(err,data) {

if (err) {
    console.log(err)
}
else {

    var datos = data.toString().split(",")
    console.log(datos)

    //console.log(data.toString());
}


} )