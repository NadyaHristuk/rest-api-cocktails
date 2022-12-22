const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const { DB_HOST } = process.env;
// DB_HOST=mongodb://localhost:27017/cocktails
async function start() {
  try {
    await mongoose.connect(DB_HOST);

    console.log("Database connection successful");

    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}

start();
