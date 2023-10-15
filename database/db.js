const mongoose = require("mongoose");

const mongo_URL = "mongodb://0.0.0.0:27017/user";

const DB = async () => {
  try {
    await mongoose.connect(mongo_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = DB;
