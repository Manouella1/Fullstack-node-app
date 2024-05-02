const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const mysql = require("mysql");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// app.use(express.static("../frontend"));

const spelRouter = require("./routes/spelRouter");
const newsRouter = require("./routes/newsRouter");
app.use(spelRouter);
app.use(newsRouter);

const customerRouter = require("./routes/customerRouter");
app.use(customerRouter);

app.get("/", (req, res) => {
  console.log("you've entered our index page");
  res.send("Hello World!");
  const mongoDBConnection = require("./mongoDBConnection");
  mongoDBConnection();
});

app.get("/hello", (req, res) => {
  console.log("you've entered our index page");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
