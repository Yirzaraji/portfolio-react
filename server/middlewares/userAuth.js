//importing modules
const express = require("express");
const db = require("../models");
const User = db.users;
const jwt = require("jsonwebtoken");
//Function to check if username or email already exist in the database
const saveUser = async (req, res, next) => {
  //search the database to see if user exist
  try {
    const username = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    //if username exist in the database respond with a status of 409
    if (username) {
      return res.json(409).send("username already taken");
    }

    //checking if email already exist
    const emailcheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    //if email exist in the database respond with a status of 409
    if (emailcheck) {
      return res.json(409).send("Authentication failed");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = (req, res, next) => {
  //cookie has been set in the login function
  const token = req.cookies.jwt;
  console.log("serverSideCookie: " + req.cookies.jwt);
  if (!token) {
    return res.status(401).send("Unauthorized: No token found in cookie");
  }

  jwt.verify(token, process.env.secretKey, async function (err, decoded) {
    if (err) {
      return res.status(401).send("Unauthorized: Invalid token");
    }
    const user = await User.findOne({
      where: {
        id: decoded.id,
      },
    });
    const response = {
      isAuthenticated: true,
      token: req.cookies.jwt,
      user: user,
    };
    res.status(200).json(response);
    //next();
  });
};

//exporting module
module.exports = { saveUser, verifyToken };
