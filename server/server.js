const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

const bootServer = async () => {
  // server configuration
  const PORT = process.env.PORT || 8080;

  //middleware
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  //api route
  app.use("/api/users", userRoutes);
  app.use("/api", postRoutes);

  //error
  app.use((req, res, next) => {
    res.sendStatus(404);
  });

  //listening
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
  });
};
bootServer().catch(console.error);
