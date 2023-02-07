const express = require("express");
const bodyParser = require("body-parser");
const PostsService = require("./service/PostsService");
const cors = require("cors");
const app = express();
const db = require("./models");

const bootServer = async () => {
  app.use(cors());
  // server configuration
  const PORT = 8080;

  app.use(bodyParser.json());

  app.get("/api/posts", (req, res) => {
    db.Posts.findAll().then((posts) => {
      res.send(posts);
    });
  });

  //Read
  app.get("/api/post/:id", async (req, res, next) => {
    const { id } = req.params;
    const post = await PostsService.readPost(id);
    res.send(post);
  });

  //Create
  app.post("/administration/post/create", async (req, res, next) => {
    await db.Posts.create(req.body);
    res.sendStatus(201);
  });

  app.delete("/api/post/delete/:id", async (req, res, next) => {
    const { id } = req.params;
    await PostsService.deletePost(id);
    res.sendStatus(200);
  });

  app.use((req, res, next) => {
    res.sendStatus(404);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port 8080.`);
  });
};
bootServer().catch(console.error);
