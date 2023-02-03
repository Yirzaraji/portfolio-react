const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/api/posts", (req, res) => {
  db.Posts.findAll().then((posts) => {
    res.send(posts);
  });
});

// app.get("/posts", (req, res) => {
//   res.send({ messageh: "Hello from server!" });
// });

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
