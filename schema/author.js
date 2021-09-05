const mongoose = require("mongoose");

//create author schema
const AuthourSchema = mongoose.Schema({
    id:Number,
    name:String,
    books:[String],
})

//author model

const AuthourModel = mongoose.model("Author",AuthourSchema); //connecting book schema to mongobd collections

module.exports = AuthourModel;