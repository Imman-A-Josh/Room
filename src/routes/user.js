module.exports = (app) => {
  const User = require("../controller/user");

  const router=require("express").Router();

  router.post('/',User.create)

  app.use('/api/user',router)
  
};
