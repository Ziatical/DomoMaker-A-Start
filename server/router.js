const controllers = require('./controllers');

const router = (app) => {
  app.get('/login', controllers.Account.loginPage);
  app.post('/login', controllers.Account.login);

  app.get('/signup', controllers.Account.signupPage);
  app.post('/signup', controllers.Account.signup);

  app.get('/logout', controllers.Account.logout);

  app.get('/maker', controllers.Domo.makerPage);
  // DOMO B
  app.post('/maker', controllers.Domo.makeDomo);
  //end
  
  app.get('/', controllers.Account.loginPage);
};

// export
module.exports = router;
