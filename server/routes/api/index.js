const router = require("express").Router();

const users = {
  going: [],
  notgoing: []
};

router.get("/going", (req, res, next) => {
  res.json(going);
});

router.get("/notgoing", (req, res, next) => {
  res.json(notgoing);
});

router.post("/going", (req, res, next) => {
  users.going.push(req.body);
  res.json({
    message: "User going",
    user: req.body
  });
});

router.post("/notgoing", (req, res, next) => {
  users.notgoing.push(req.body);
  res.json({
    message: "User not going",
    user: req.body
  });
});

module.exports = router;
