## Packgage list

- Node.js
- Express
- Sequelize
- Nodemon
- body-parser
- Bcrypt
- Dotenv
- JSON Web Token
- CookieParser

## Sequelize

## create db (based on settings in config folder):

- sequelize db:create
- npx sequelize-cli db:migrate

## Creating a seed (fixture):

- npx sequelize-cli seed:generate --name yourseedname

## import the seed:

- npx sequelize-cli db:seed:all

## For delete all previous seed migration:

- npx sequelize-cli db:seed:undo:all
