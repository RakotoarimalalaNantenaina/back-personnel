const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: {type:Number},
  id2: {type: Number},
  id_panier: {type: Number},
  id_utilisateur : {type: Number},
  titre: { type: String, required: true},
  description: { type: String, required: true},
  artiste: {type: String, required: true},
  date: {type: String, required: true},
  genre: {type: String, required: true},
  prix: {type: Number, required: true},
});

module.exports = mongoose.model("panier", UserSchema);
