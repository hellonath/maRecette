// Création de fonction FETCH ou AXIOS

exports.renderHomePage = (req, res) => {
    res.render('accueil');
}

exports.renderLoginPage = (req, res) => {
    res.render('login');
}

exports.renderRegisterPage = (req, res) => {
  res.render('register');
};


