const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: {type:Number},
  titre: { type: String, required: true},
  description: { type: String, required: true},
  genre :  { type: String ,   required: true},
  artiste :  { type: String ,   required: true},
  date: { type: String ,   required: true},
  id_user: {type: Number,   required: true},
  prix: { type: Number ,   required: true},
  photo_produit: { type: String ,   required: true},
  valid: {type: Boolean}

});

module.exports = mongoose.model("album", UserSchema);
