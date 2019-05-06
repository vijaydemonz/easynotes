const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./app/routes/notes.routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(route);
const dbConfig = "mongodb://127.0.0.1:27017/easynotes";

mongoose.promise = global.Promise;

mongoose
  .connect(dbConfig, {
    userNewUrlPaser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("could not connect to the database. Exiting now....", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message:
      "welcome to Easy Notes application. Take notesQuickly. Organize and keep track of all your notes."
  });
});

// app.route();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
