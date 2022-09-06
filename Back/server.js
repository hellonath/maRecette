const express = require('express')
require('dotenv').config()
const apiRouter = require('./routes/api.routes').router

// Utilisation du Framework Express + ses fonctions
const app = express()

app.use(express.urlencoded({
    extended:true
}))

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
});

app.use(express.json())

// API ROUTE
app.use('/api/', apiRouter)

// Lancer le serveur
app.listen(process.env.APP_PORT, () => {
    app.use("/css", express.static("css"));
    console.log(process.env.APP_PORT);
})




