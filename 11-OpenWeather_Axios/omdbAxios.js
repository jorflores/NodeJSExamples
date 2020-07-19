// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// Then run a request with axios to the OMDB API with the movie specified
//"http://api.openweathermap.org/data/2.5/weather?q=Monterrey,MxL&appid=aea208a58f22c7fe32632fe1c466f147&units=metric"

var axios = require("axios");

axios.get("http://api.openweathermap.org/data/2.5/weather?q=Monterrey,MxL&appid=aea208a58f22c7fe32632fe1c466f147&units=metric")
     .then(function(response){

        console.log(response.data.weather[0].description);
     })