const express = require("express");  //installing express

const ourApp = express();//initializing ourApp with express features

//creating server

ourApp.get("/", (request,response) => { //route
        response.json({message: "Request served!!!!!!!!"});
});

ourApp.listen(4000, () => console.log("server is running"));