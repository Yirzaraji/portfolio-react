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
  app.use(
    cors({
      origin: "http://localhost:3000", // replace with your frontend URL
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));

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
