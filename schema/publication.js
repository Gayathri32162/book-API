const mongoose = require("mongoose");


//create publication schema

const publicationSchema = mongoose.Schema({
    id:Number,
    name:String,
    books:[String],

})


//create a model
const publicationmodel = mongoose.model("publications", publicationSchema);

module.exports = publicationmodel;