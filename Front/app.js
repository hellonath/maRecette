// IMPORTS
const express = require('express');
const path = require('path');
const routes = require('./routes/router');

// Utiliser les fonctions
const app = express();

// MIDDLEWARE
app.use(express.json());

// SET VIEW : 1- engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.static("public"));

// APPELER LES ROUTES
app.use('/', routes);

// LANCER LE SERVEUR
app.listen(7000,()=>{
    console.log("serveur front en marche")
})
