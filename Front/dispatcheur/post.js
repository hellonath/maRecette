const fetch = require("node-fetch");
const LocalStorage = require("node-localstorage").LocalStorage;
let localStorage = new LocalStorage("./storageToken");

// ON EST ENREGISTRÉ !
exports.isLogged = async (req, res, next) => {
  let myToken = localStorage.getItem("token");

  if (myToken != "") {
    next();
  } else {
    res.redirect("/login");
  }
};

// --------------FONCTION USER - REGISTER
/*exports.register = async(req, res) => {
  //console.log("toto", req.body);

    // le fetch pour envoyer (poster) a la base de données grace a ton url api
  await fetch(`http://localhost:9000/api/user/register`, {
    // Ajouter un type de méthode
    method: "POST",
registerUser
    // Ajouter du contenu à envoyer
    body: JSON.stringify({
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: req.body.password
    }),
  })
    // Convertir en JSON
    .then((res) => {
      return res;
    })
    // Afficher les résultats sur la console
    .then((json) => {
      if (json) {
        res.redirect("/login");
      } else {
        res.redirect("/register");
      }
    })
    .catch((err) => {
      console.log("ERREUR ----", err);
    });
};*/

// -------------- FONCTION USER - LOGIN
/*exports.login = async (req, res) => {
  console.log("toto", req.body, token);

  await fetch(`http://localhost:9000/api/user/login`, {
    // Ajouter un type de méthode
    method: "POST",

    // Adding headers to the request
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "same-origin",

    // Ajouter du contenu à envoyer
    body: JSON.stringify({
      email: req.body.email,
      password: req.body.password,
    }),
  })
    // Convertir en JSON
    .then((res) => {
      return res.json();
    })

    // Afficher les résultats sur la console
    .then((json) => {
      localStorage.setItem("token", json.token);

      if (json.token) {
        res.redirect("/");
      } else {
        res.render("/login", json);
      }
    })

    .catch((err) => {
      console.log("ERR ----", err);
    });
};*/

exports.registerUser = async (req, res) => {
    console.log('--------', req.body)
//   await fetch(`http://localhost:9000/api/user/register`, {
//     // Adding method type
//     method: "POST",

//     // Adding contents to send
//     body: JSON.stringify({
//       pseudo: req.body.pseudo,
//       email: req.body.email,
//       password: req.body.password,
//     }),

//     // Adding headers to the request
//     headers: {
//       Accept: "application/json",

//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())

//     .then((json) => {
//       if (json.error) {
//         console.log("------- front ------", json);

//         res.render("register", json);
//       } else {
//         res.redirect("/login");
//       }
//     });
};

exports.login = async (req, res) => {
    console.log("toto", req.body);
  await fetch("http://localhost:9000/api/user/login", {
    // Adding method type
    method: "POST",

    // Adding headers to the request
    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",
    },

    credentials: "same-origin",

    // Adding contents to send
    body: JSON.stringify({
      email: req.body.email,
      password: req.body.password,
    }),
  })

    // Converting to JSON
    .then((res) => {
      return res.json();
    })

    // Displaying results to console
    .then((json) => {
      console.log("toto", json);

      localStorage.setItem("token", json.token);

      const tokenFromLocalStorage = localStorage.getItem("token");

      console.log(tokenFromLocalStorage);

      if (json.token && tokenFromLocalStorage) res.redirect("/");
      else res.render("login", json);
    })

    .catch((err) => {
      console.error(err);
    });
};