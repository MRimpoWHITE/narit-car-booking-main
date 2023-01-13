const controller = require("../controllers/authentication.controller");
const router = require("express").Router();
// const auth = require("../routes")

const url_path = "/api/auth";

module.exports = (app) => {
  app.post(url_path + "/getInfoUserById", controller.getInfoUserById);
  // router.post("/login", auth.login);

  // router.get("/renew", auth.renew);

  // router.post("/signup", auth.signup);

  // app.use('/auth', router);
};
