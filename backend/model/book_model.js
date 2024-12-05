import mongoose from "mongoose";

//designing the schema

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    Image:String,
    title:String
})

//creating a model (collection) for the schema

const book = mongoose.model("book",bookSchema); //the data stored in the given schema format will be stored in the "book" collection.

export default book;