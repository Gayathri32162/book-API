const express = require("express");  //installing express

//database  
const Database = require("./database");

const ourApp = express();//initializing ourApp with express features

ourApp.use(express.json());//coz we are sending the req in the json format

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


//route  -/book/c/:category
//desc -to get a list of book based on category
//access -public
//method -GET
//params -category
//body -none

ourApp.get("/book/c/:category",(req,res) => {
    const getbook = Database.Book.filter(
        (book) =>book.category.includes( req.params.category)
    );
    return res.json({book:getbook});
});

//mytask

// //route  -/book/a/author
// //desc -to get a list of book based on author
// //access -public
// //method -GET
// //params -author
// //body -none

// ourApp.get("/book/a/author",(req,res) => {
//     const getbook = Database.Book.filter(
//         (book) =>book.category.includes( req.params.author)
//     );
//     return res.json({book:getbook});
// });


//route  -/author
//desc -to get all the author
//access -public
//method -GET
//params -none
//body -none

ourApp.get("/author", (req,res) => {
    return res.json({ author: Database.Author});
});

//route  -/book/new
//desc -to add new book
//access -public
//method -POST
//params -none
//body -none

ourApp.post("/book/new",(req,res) => {
    console.log(req.body);
    return res.json({message:'Book added successfuly'}); //to stop the looping
});


//route  -/author/new
//desc -to add new author
//access -public
//method -POST
//params -none
//body -none

ourApp.post("/author/new",(req,res) => {
    const {newauthor} = req.body;  //destructuring
    console.log(newauthor);
    return res.json({message:"author was added"});

});

//route  -/publication/new
//desc -to add new publication
//access -public
//method -POST
//params -none
//body -none

ourApp.post("/publication/new",(req,res) => {
    const publication = req.body;
    console.log(publication);
    return res.json({message:'publication added successfuly'}); //to stop the looping
});




ourApp.listen(4000, () => console.log("server is running"));