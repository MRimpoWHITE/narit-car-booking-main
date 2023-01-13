// const Controllers = require('../controllers/users.controller')
// const router = require("express").Router();

// module.exports = (app) => {
//     app.get('/users', Controllers.getUsers)
//     app.get('/users/{userId}',Controllers.getUserById)
//     app.post('/user/postUser', Controller.postUser)
// }

const controller = require("../controllers/users.controller");
const router = require("express").Router();

router.get("login", (req, res) => res.render("/login"));
// const auth = require("../routes")
router.get("/", (req, res) => res.render("home"));


router.post("/login", (req, res) => {
  const { User } = req.body;
  console.log(req, body);
  res.render("/dashboard");
});


const url_path  = "/api/auth";

module.exports = (app) => {
  // app.get('/users', Controllers.getUsers)
  // app.get('/users/{userId}',Controllers.getUserById)
  app.post("/user/postUser", controller.postUser);
};
