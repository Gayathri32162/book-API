const express = require("express");  //installing express

//database
const Database = require("./database")

const ourApp = express();//initializing ourApp with express features

//creating server

ourApp.get("/", (request,response) => {    //route
        response.json({message: "server is working"});    //test api
});

ourApp.get("/book", (req,res) => {
    return res.json({ books: Database.Book});
});

ourApp.listen(4000, () => console.log("server is running"));