// const jwt = require("jsonwebtoken");
// const isLoggedIn = (req, res, next) => {
//   const token = req.get("authorization");
//   const verified = jwt.verify(token, "loginsecret");
//   if (!verified) {
//     res.redirect("/user/login");
//   }
//   console.log(verified);
//   next();
// };

// module.exports = isLoggedIn;

// require('dotenv')
// import * as jwt from 'jsonwebtoken'
const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  
  const token = req.get("authorization");
  const secret = process.env.SECRET;
  // const token = process.env.SECRET;

  
  // console.log('jwt',jwt);
  // console.log('secret',process.env.SECRET);
  const verified = jwt.verify(token, secret);
  // const verified = jwt.verify(token, "THISISTHESECRET");
  //console.log(jwt.verify(token, "THISISTHESECRET"));
  if (!verified) {
    console.log('not verified');

    res.redirect("/user/login");
  }
  if (verified){
    //console.log('verified');
    next();
  }
  
};

module.exports = isLoggedIn;