import connection from "../config/orm.js";
import Sequelize from "sequelize";
import User from "./usersql.js";
import Book from "./book.js";

const Wish = connection.define(
  "user _has_wishes",
  {
    iduser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },

    idbook: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Book.belongsToMany(User, {
  through: "users_has_wishes",
  foreignKey: "idbook",
  otherKey: "iduser",
});

User.belongsToMany(Book, {
  through: "users_has_wishes",
  foreignKey: "iduser",
  otherKey: "idbook",
});

export default Wish;
