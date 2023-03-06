//importing modules
const express = require("express");
const userController = require("../controllers/userController");
const userAuth = require("../middlewares/userAuth");
const router = express.Router();
const { signup, login, loggout } = userController;
const { verifyToken } = userAuth;
//const app = express();

//signup route
router.post("/signup", userAuth.saveUser, signup);

//login route
router.post("/login", login);

//Token validation
router.post("/auth/verify", verifyToken);

//loggout
router.post("/loggout", loggout);

module.exports = router;
