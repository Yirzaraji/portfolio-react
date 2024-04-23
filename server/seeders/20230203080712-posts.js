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
      const randTag2 = Math.floor(Math.random() * tags.length);
      const randTag3 = Math.floor(Math.random() * tags.length);
      console.log(categories[rand]);

      const data = [
        {
          title: "Front end react",
          description:
            "Stars Wars Battle est un mini jeu de combat au tour par tour. Le principe est simple, le joueur sélectionne deux cartes et les faits s'affronter en déclenchant le combat.",
          image: `https://picsum.photos/390/340?random=${random}`,
          paragraph:
            "Ce projet a été realisé au niveau du back end en php orienté objet ainsi j'ai pu créer une classe personnage permettant d'attribuer des statistiques et des pouvoirs différents a chaque personnage (ou carte). Certains comme le vénérable maître Yoda ont moins de puissance d'attaque mais bénéficie d'un sort de force lui permettant de regagner ses points de vie. Coté Front end l'interactivité de l'interface graphique est gérée en Javascript de plus a la fin du combat, le déroulé de celui ci est enregistré en base de donnée avec une requête Ajax.",
          category: categories[rand],
          demo: "http://blabla.fr",
          tags: [tags[randTag], tags[randTag2], tags[randTag3]],
          git: "http://gitub.com",
          images: ["images/test2.jpg", "images/test2.jpg"],
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
