const mongoose = require("mongoose");

const MONGO_URL = "mongodb://0.0.0.0:27017/autenticacionLocalYT";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db;
