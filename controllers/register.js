const bcrypt = require("bcryptjs");
const userSchema = require("../model/user.js");

const register = async (req, res) => {
  const { nameuser, email, password } = req.body;

  userSchema.findOne({ email }).then((user) => {
    if (user) {
      return res.json({ message: "Ya existe el usuario con ese correo" });
    } else if (!nameuser || !email || !password) {
      return res.json({ message: "Falta el nombre, correo o la contraseña" });
    } else {
      bcrypt.hash(password, 10, (err, hashPassword) => {
        if (err) {
          response.json({ err });
        } else {
          const newUser = new userSchema({
            nameuser,
            email,
            password: hashPassword,
          });
          newUser
            .save()
            .then((user) => {
              res.json({ message: "Usuario creado correctamente", user });
            })
            .catch((err) => {
              console.error("Error de crear el usuario:", err);
            });
        }
      });
    }
  });
};

module.exports = register;
