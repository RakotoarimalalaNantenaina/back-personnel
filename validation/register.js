const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Le champ Nom est obligatoire";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Le champ email est obligatoire";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "L'email est invalide";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Le mot de passe est obligatoire";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirmer le mot de passe est requis";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Le mot de passe doit être au moins de 6 caractères";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "les mots de passe doivent correspondre";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
