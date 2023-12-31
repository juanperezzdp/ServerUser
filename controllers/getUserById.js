const Usuario = require("../model/usuario");

const getUserById = async (req, res) => {
  const { userid } = req.user;

  if (userid.length === 24) {
    Usuario.findById(userid).then((usuario) => {
      if (!usuario) {
        return res.json({
          mensaje: "No se encontro ningun usuario con esa ID",
        });
      } else {
        const { _id, contraseña, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
  }
};

module.exports = getUserById;
