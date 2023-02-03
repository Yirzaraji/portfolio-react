"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      paragraph: DataTypes.STRING,
      category: DataTypes.STRING,
      demo: DataTypes.STRING,
      tags: DataTypes.STRING,
      git: DataTypes.STRING,
      images: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
