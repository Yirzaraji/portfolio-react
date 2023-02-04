"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 0; i < 20; i++) {
      let random = Math.floor(Math.random() * i);
      const categories = ["Front", "Design", "Back"];
      const tags = [
        "sql",
        "php",
        "symfony",
        "react.js",
        "js",
        "node.js",
        "html",
        "css",
        "unity",
        "c#",
        "bootstrap",
        "photoshop",
        "illustrator",
        "indesign",
      ];

      const rand = Math.floor(Math.random() * categories.length);
      const randTag = Math.floor(Math.random() * tags.length);
      console.log(categories[rand]);

      const data = [
        {
          title: "Front end react",
          description: "qdzqqdzqd",
          image: `https://picsum.photos/390/340?random=${random}`,
          paragraph: "zqdloremqdqdipsum",
          category: categories[rand],
          demo: "http://blabla.fr",
          tags: tags[randTag],
          git: "http://gitub.com",
          images: "images/test2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      await queryInterface.bulkInsert("Posts", data);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
