const express = require("express");
const cors = require("cors");
const DB = require("./database/db");
const { register, login, getUserById } = require("./controllers/index");

//config de servidor
const app = express();
DB();
app.use(cors());
app.use(express.json());

//rutas
app.get("/user/:id", getUserById);
app.post("/register", register);
app.post("/login", login);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server: ${PORT}`);
});
