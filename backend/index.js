//const express = require("express");
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import book_routes from "./Routes/book_routes.js";
import users_routes from "./Routes/users_routes.js";
const app = express();
app.use(cors());
app.use(express.json()); // to parse the data coming from the body --(req.body)
dotenv.config();

const PORT = process.env.PORT || 4000; //if incase the mentioned port in the .env file is busy, then the server will run on the port 4000...
const URI = process.env.MongoDBURI;
//connect to mongodb
//Note: if you're using mongodb atlas then the "useNewUrlParser:true,useUnifiedTopology:true" is not required
try {
  mongoose.connect(URI);
  console.log("Connected to mongodb.....");
} catch (error) {
  console.log(error);
}

//defining routes

app.use("/books", book_routes);
app.use("/user", users_routes);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
