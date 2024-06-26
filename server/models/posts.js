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
      title: { type: DataTypes.STRING, allowNull: true },
      description: { type: DataTypes.TEXT, allowNull: true },
      image: { type: DataTypes.STRING, allowNull: true },
      paragraph: { type: DataTypes.TEXT, allowNull: true },
      category: { type: DataTypes.STRING, allowNull: true },
      demo: { type: DataTypes.STRING, allowNull: true },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [null],
        allowNull: true,
      },
      git: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [null],
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Posts",
      hooks: {
        beforeSave: (instance, options) => {
          //need to check if the first "if" is really necessary (will have to run back "db migrate" after any changes)
          if (instance.images && typeof instance.images === "string") {
            instance.images = instance.images.split(",");
          }
          if (instance.tags && typeof instance.tags === "string") {
            instance.tags = instance.tags.split(",");
          }
        },
      },
    }
  );
  return Posts;
};
