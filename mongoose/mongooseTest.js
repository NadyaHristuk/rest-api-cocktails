// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const DB_HOST =
  "mongodb+srv://Droid:Droidc3p0@cluster0.u1jht0c.mongodb.net/db-drinks";

console.log(process.env);

mongoose
  .connect(DB_HOST)
  .then(console.log("Database connection successful"))
  .catch((err) => console.error(err));
