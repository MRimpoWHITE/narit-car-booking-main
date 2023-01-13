const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const app = express();
// const mysql = require("mysql");

app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());


app.post("/login", async (req, res) => {
  console.log(req.body);
  res
    .json({ status: "KK" })
    .all((req, res, next) => {
      res.locals.pageData = {
        title: TITLE_PAGE,
      }; 
      next();
    })
    .get((req, res, next) => {
      res.render("views/dashboard");
    });
});
// router.post('/register' , (req, res) => {
//     console.log(req,body);
//     res.redirect('/');
// });

module.exports = router;
