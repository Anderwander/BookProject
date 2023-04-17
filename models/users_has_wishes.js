import connection from "../config/orm.js";
import Sequelize from "sequelize";
import User from "./usersql.js";
import Book from "./book.js";

const Wish = connection.define(
  "user_has_wishes",
  {
    username: {
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
  through: "user_has_wishes",
  foreignKey: "idbook",
  otherKey: "username",
});

User.belongsToMany(Book, {
  through: "user_has_wishes",
  foreignKey: "username",
  otherKey: "idbook",
  as: "favorites",
});

Book.belongsTo(User, {
  foreignKey: "username",
  as: "owner",
});

User.hasMany(Book, {
  foreignKey: "username",
  as: "myBooks",
});

export default Wish;
