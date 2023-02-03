## follow this link https://sequelize.org/docs/v6/other-topics/migrations/

## create db (based on settings in config folder): 
- sequelize db:create
- npx sequelize-cli db:migrate

## Creating a seed (fixture):
- npx sequelize-cli seed:generate --name yourseedname

## file generated should look like this:
- await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "test",
          description: "qdzqqdzqd",
          image: "images/test.jpg",
          paragraph: "zqdloremqdqdipsum",
          category: "Design",
          demo: "http://blabla.fr",
          tags: "js, twig",
          git: "http://gitub.com",
          images: "images/test2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

## import the seed:
- npx sequelize-cli db:seed:all

## For delete all previous seed migration:
- npx sequelize-cli db:seed:undo:all