const mongoose = require("mongoose");
require('dotenv').config()

async function connectDB() {
  try {
    console.log(process.env.MONGO_URL);
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Connected to DB: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;
