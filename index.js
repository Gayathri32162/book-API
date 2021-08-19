const express = require("express");  //installing express

//database
const Database = require("./database")

const ourApp = express();//initializing ourApp with express features

//creating server

ourApp.get("/", (request,response) => {    //route
        response.json({message: "server is working"});    //test api
});

//route  -/book
//desc -to get all books
//access -public
//method -GET
//params -none
//body -none

ourApp.get("/book", (req,res) => {
    return res.json({ books: Database.Book});
});

//route  -/book/:bookID
//desc -to get a book based on ISBN
//access -public
//method -GET
//params -bookID
//body -none

ourApp.get("/book/:bookID", (req,res) => {
    const getbook = Database.Book.filter(
        (book) =>book.ISBN === req.params.bookID
    );
    return res.json({book:getbook});
});

ourApp.listen(4000, () => console.log("server is running"));