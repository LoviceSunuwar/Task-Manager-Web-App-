const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const session = require("express-session");
const secret = process.env.SECRET;

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const duplicate =
      (await User.findOne({ name })) || (await User.findOne({ password }));
    if (duplicate) {
      res.status(401);
      throw new Error("User already exist");
    }
    const hashed = await bcrypt.hash(password, 12);
    const newUser = await new User({ name, email, password: hashed });
    const user = await newUser.save();

    return res.status(200).send({
      user,
      token: jwt.sign({ user }, secret, {
        expiresIn: "24h",
      }),
      message: "registred user successfully",
    });
  } catch (error) {
    return res.status(401).send("Not authenticated");
  }
};

exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).send("User does not exist");
    }
    const valid = await bcrypt.compare(password, user.password);

    if (valid) {
      const token = jwt.sign({ user }, secret, {
        expiresIn: "24h",
      });

      // window.location.href = "/";
      return res.status(200).send({
        user,
        token,
        message: "login user successfully",
      });
    } else {
      return res
        .status(404)
        .send({ status: "danger", msg: "password does't match" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ status: "danger", error });
  }
};
