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
    return res.json({book:getbook});//spreading operator which get only the data inside the obj and updating it 
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
    const {newbook} = req.body;
    
    //add new data

    return res.json(Database.Book);

});


//route  -/author/new
//desc -to add new author
//access -public
//method -POST
//params -none
//body -none

ourApp.post("/author/new",(req,res) => {
    const {newauthor} = req.body;  //destructuring

    Database.Author.push(newauthor);
    return res.json(Database.Author);

});

//route  -/publication/new
//desc -to add new publication
//access -public
//method -POST
//params -none
//body -none

ourApp.post("/publication/new",(req,res) => {
    const {newpublication} = req.body;//here we are creating an new object to be updated in database
    
    console.log(newpublication);

    return res.json({message:"publication added"});
});



//route  -/book/updateTitle
//desc   -to update the title of the book
//access  -public access
//parameter  -ISBN(to find the book to be updated)
//method   -PUT

ourApp.put("/book/updateTitle/:isbn", (req,res) => {
    const {updatedbook} = req.body;
    const {isbn} = req.params;

    Database.Book.forEach((book) => {
        if(book.ISBN === isbn){
            book.title = updatedbook.title;
            return book;
        }
        return book;
    });
    return res.json(Database.Book);
});





//route  -/book/update
//desc   -to update any details
//access  -public access
//parameter  -ISBN(to find the book to be updated)
//method   -PUT


// ourApp.put("/book/update/:isbn", (req,res) => {
//     const {updatedbook} = req.body;

//     const {isbn} = req.params;
//     // console.log(updatedbook, isbn);//checking if the datas updated or not

//     const book = Database.Book.map((book) => { //map creates a new array in database which contains the new updates
//         if(book.ISBN === isbn){
//             console.log(book);
//             return {...book, ...updatedbook}//spread operator
//         }
//         return book;
//     });
//     return res.json(book);

// });

//route  -/bookAuthor/update/
//desc   -to update authors details
//access  -public access
//parameter  -ISBN(to find the book to be updated)
//method   -PUT

ourApp.put("/bookAuthor/update:isbn",(req,res) => {
    const {newauthor} = req.body;
    const {isbn} = req.params;

    Database.Book.forEach((book) => {
        if (book.ISBN === isbn){
            if(!book.authors.includes(newauthor)){//checking the new author already exist or not
                return book.authors.push(newauthor)//adding the author
            }
            return book;
        }
        return book;
    })
    //updating the authors database objects
    Database.Author.forEach((author) =>{
        //check if the author id match
        if (author.id === newauthor){
            //check if the author already exists
            if(!author.books.includes(isbn)){
                //if not then push the new book
                author.books.push(isbn);
                return author;


            }
            //else return
            return author;
        }
        return author;//default return wthout any changes
    })

    return res.json({ book: Database.Book, author: Database.Author });


});

//TODO TASK
//route  -/author/update
//description  -update any details of author
//params   -id
//method   -PUT

ourApp.put("/author/update/:id",(req,res) => {
    const {updateauthor} = req.body;
    const {id} = req.params;

    const author = Database.Author.map((author) => {
        if(author.id === parseInt(id)){
            return { ...author, ...updateauthor};
        }
        return author;

    });

    return res.json(author);
})






// route    -/book/delete:isbn
// desc     -to delete a book
// access   -public
// params   -ISBN
// method   -delete

ourApp.delete("/book/delete:isbn",(req,res) => {
    //identifying the book to be deleted using isbn num
    const {isbn} = req.params;

    //filtering data to delete
    const filterBooks = Database.Book.filter((book) => Database.Book.ISBN !== isbn);
    

    //id isbn doesnt match then simply return the filterBooks in the database
    Database.Book = filterBooks;

    return res.json(Database.Book);
});




/*Route    -/book/delete/author
desc       -to delete an author from the book
params     -public 
access     -id,isbn
method     -DELETE
*/


ourApp.delete("/book/delete/author/:isbn/:id", (req,res) => {
    const {isbn,id} = req.body;


    //updating book database object
    Database.Book.forEach((book) => {
        if(book.ISBN === isbn){
            if(!book.authors.includes(parseInt(id))){
                return book;
            }

            book.authors = book.authors.filter((id) => id !== parseInt(id));

            return book;
        }

        return book;
    });

    
});

ourApp.listen(4000, () => console.log("server is running"));