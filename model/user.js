const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  nameuser: { type: "string", required: true },
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
});

module.exports = model("User", UserSchema);
