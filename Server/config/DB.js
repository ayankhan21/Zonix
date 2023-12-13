const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log(process.env.MONGO_URL);
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(
      "mongodb+srv://ayankhan21:Dellinspiron7588@cluster0.sfa1ovo.mongodb.net/?retryWrites=true&w=majority",
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
