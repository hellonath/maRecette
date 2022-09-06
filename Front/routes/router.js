const express = require("express");
const route = express.Router();

let postDispatcheur = require("../dispatcheur/post")
let renderDispatcheur = require("../dispatcheur/render");

// Création des routes
  // GET = appeler une page / Afficher
route.get("/", renderDispatcheur.renderHomePage);
route.get("/login", renderDispatcheur.renderLoginPage);
route.get("/register", renderDispatcheur.renderRegisterPage);

  // POST = envoyer à la base de données grâce à l'API / S'enregistrer
route.post("/register", postDispatcheur.registerUser);
route.post("/login", postDispatcheur.login);


module.exports = route