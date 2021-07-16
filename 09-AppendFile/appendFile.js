var fs = require("fs");

var text = process.argv[2];

fs.appendFile("ejemplo.txt", text + ",", (error) => {
  
    if (error){
        console.log(error);
    }
    else {
        console.log("Content Added!");
    }

})