const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const cors = require('cors')
const path = require("path")
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload');
app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = require("./routes/api/users");

// // DB Config
const db = require("./config/keys").mongoURI;

// // Connection au  MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connexion de la base de donnée avec succes"))
  .catch(err => console.log(err, "Erreur de la connexion de la base de donnée"));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
require('./routes/route')(app);
app.use("/api/users", users);


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Serveur demarer sur le port ${port} !`));

