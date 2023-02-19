const PostsService = require("../service/PostsService");
const db = require("../models");

const getPosts = (req, res) => {
  db.Posts.findAll().then((posts) => {
    res.send(posts);
  });
};

//Read
const getPost = async (req, res, next) => {
  const { id } = req.params;
  const post = await PostsService.readPost(id);
  res.send(post);
};

//Create
const createPost = async (req, res, next) => {
  await db.Posts.create(req.body);
  res.sendStatus(201);
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;
  await PostsService.deletePost(id);
  res.sendStatus(200);
};

//update
const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const formData = {};

    //prevent empty inputs form data to be sent
    for (const key in req.body) {
      if (req.body[key]) {
        formData[key] = req.body[key];
      }
    }

    await PostsService.updatePost(formData, id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
};
