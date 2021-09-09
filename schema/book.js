const mongoose = require("mongoose");

//create a book schema
//schema is nothing but the structure
const BookSchema = mongoose.Schema({  //this is how we create a schema
    ISBN :{
        type: String,
        required : true,   

    },
    title:{
        type: String,
        required: true,
    },
    author:[Number],
    language: String,
    pubDate:String,
    numOfPage:Number,
    category:[String],
    publication:Number,

});

//create a book model
const BookModel = mongoose.model("books",BookSchema); //connecting book schema to mongobd collections

module.exports = BookModel;
