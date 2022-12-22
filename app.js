const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const drinksRouter = require("./routes/api/v1/drinks");
// const ingredientRouter = require("./routes/api/v1/ingredient");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/json/v1/1/drinks", drinksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
// mongodb+srv://user:123@cluster0.jkmtu.mongodb.net/cocktails/?retryWrites=true&w=majority