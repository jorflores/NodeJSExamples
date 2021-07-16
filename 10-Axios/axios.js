var axios = require("axios");

axios.get("https://reqres.in/api/users")

.then (function(response){
    console.log(response.data)
})