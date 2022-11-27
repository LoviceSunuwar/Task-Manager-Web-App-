const jwt = require("jsonwebtoken");
const isLoggedIn = (req, res, next) => {
  const token = req.get("authorization");
  const verified = jwt.verify(token, "loginsecret");
  if (!verified) {
    res.redirect("/user/login");
  }
  next();
};

module.exports = isLoggedIn;
