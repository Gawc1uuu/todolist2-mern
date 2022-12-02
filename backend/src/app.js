const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

//connecting to db and starting server
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/todoList");
  app.listen(4000, () => {
    console.log("Listening to requests and conncted to db");
  });
}
//importing router
const todosRouter = require("./routes/todosRoutes");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routing
app.use("/api/todos", todosRouter);
