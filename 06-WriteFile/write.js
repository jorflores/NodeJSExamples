var fs  = require("fs")

fs.writeFile("movies.txt", "Movie1, Movie2 , Movie3", function (error) {

    if (error){
        console.log(error);
    }
    else {
        console.log("file updated");
    }

})