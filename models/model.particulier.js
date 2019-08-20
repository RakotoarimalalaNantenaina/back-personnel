const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: {type:Number},
  id2: {type: Number},
  nom: { type: String, required: true},
  prenom: { type: String, required: true},
  email: {type: String, required: true},
  numtel: {type: Number, required: true},
});

module.exports = mongoose.model("particulier1", UserSchema);
