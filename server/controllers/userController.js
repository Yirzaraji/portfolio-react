//importing modules
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

// Assigning users to the variable User
const User = db.users;

//signup user
const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const data = {
      userName,
      email,
      password: await bcrypt.hash(password, 10),
    };
    //saving the user
    const user = await User.create(data);

    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.secretKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60,
        httpOnly: true,
        sameSite: "strict",
      });

      console.log("userzee", JSON.stringify(user, null, 2));
      //send users details
      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

//login authentication
const login = async (req, res) => {
  try {
    const { email, hash } = req.body;
    //find a user by their email
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    //if user email is found, compare password with bcrypt
    if (user) {
      const isSame = await bcrypt.compare(hash, user.password);
      //if password is the same
      //generate token with the user's id and the secretKey in the env file
      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });
        //if password matches go ahead and generate a cookie
        res.cookie("jwt", token, {
          maxAge: 1 * 24 * 60 * 60 * 1000,
        });
        //console.log("user", JSON.stringify(user, null, 2));
        //send user data
        return res.status(201).json({ user: user });
      } else {
        return res.status(401).send("Authentication failed: Wrong Password");
      }
    } else {
      return res.status(401).send("Authentication failed: Unknow user");
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = (req, res, next) => {};

module.exports = {
  signup,
  login,
  verifyToken,
};
