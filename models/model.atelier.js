const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: {type:Number},
  titre: { type: String, required: true},
  description: { type: String, required: true},
  date: { type: String ,   required: true},
  id_user: {type: Number,   required: true},
  horaire: {type: String,   required: true},
  duree: {type: Number,   required: true},
  place_dispo: {type: Number ,   required: true},
  place_reserve: {type: Number ,   required: true},
  prix: { type: Number ,   required: true},
  photo_produit: { type: String ,   required: true},
  valid: {type: Boolean}

});

module.exports = mongoose.model("atelier1", UserSchema);
