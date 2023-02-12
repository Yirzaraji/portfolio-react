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
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
      paragraph: { type: DataTypes.STRING, allowNull: false },
      category: { type: DataTypes.STRING, allowNull: false },
      demo: { type: DataTypes.STRING, allowNull: false },
      tags: { type: DataTypes.STRING, allowNull: false },
      git: { type: DataTypes.STRING, allowNull: false },
      images: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
