const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const fetchCards = [
  {
    id: 0,
    title: "test",
    image: "images/escargeddon.jpg",
    description: "blabla",
    demo: "pathlink",
    category: "Dev",
    git: "pathgit",
    gallery: "pathimages",
    tags: "Js, React, Node",
    data: "22/12/2023",
  },
  {
    id: 1,
    title: "test",
    image: "images/lfp.jpg",
    description: "blabla",
    demo: "pathlink",
    category: "Design",
    git: "pathgit",
    gallery: "pathimages",
    tags: "Js, React, Node",
    data: "22/12/2023",
  },
  {
    id: 2,
    title: "test",
    image: "images/escargeddon.jpg",
    description: "blabla",
    demo: "pathlink",
    category: "Design",
    git: "pathgit",
    gallery: "pathimages",
    tags: "Js, React, Node",
    data: "22/12/2023",
  },
  {
    id: 3,
    title: "test",
    image: "images/lfp.jpg",
    description: "blabla",
    demo: "pathlink",
    category: "Dev",
    git: "pathgit",
    gallery: "pathimages",
    tags: "Js, React, Node",
    data: "22/12/2023",
  },
  {
    id: 4,
    title: "test",
    image: "images/escargeddon.jpg",
    description: "blabla",
    demo: "pathlink",
    category: "Print",
    git: "pathgit",
    gallery: "pathimages",
    tags: "Js, React, Node",
    data: "22/12/2023",
  },
  {
    id: 5,
    title: "test",
    image: "images/lfp.jpg",
    description: "blabla",
    demo: "pathlink",
    category: "Dev",
    git: "pathgit",
    gallery: "pathimages",
    tags: "Js, React, Node",
    data: "22/12/2023",
  },
  {
    id: 6,
    title: "test",
    image: "images/escargeddon.jpg",
    description: "blabla",
    demo: "pathlink",
    category: "Dev",
    git: "pathgit",
    gallery: "pathimages",
    tags: "Js, React, Node",
    data: "22/12/2023",
  },
  {
    id: 7,
    title: "test",
    image: "images/lfp.jpg",
    description: "blabla",
    demo: "pathlink",
    category: "Dev",
    git: "pathgit",
    gallery: "pathimages",
    tags: "Js, React, Node",
    data: "22/12/2023",
  },
];

app.get("/posts", (req, res) => {
  res.send({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
