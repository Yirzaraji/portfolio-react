"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * i);
      const categories = ["Front", "Design", "Back"];

      const rand = Math.floor(Math.random() * categories.length);
      console.log(categories[rand]);

      const data = [
        {
          title: "Front end react",
          description: "qdzqqdzqd",
          image: `https://picsum.photos/290/240?random=${random}`,
          paragraph: "zqdloremqdqdipsum",
          category: categories[rand],
          demo: "http://blabla.fr",
          tags: "js, react",
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
