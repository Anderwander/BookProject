import connection from "../config/orm.js";
import Sequelize from "sequelize";
import User from "./user.js";
import Book from "./book.js";


const Wish = connection.define(
  "users_has_wishes",
  {
    iduser: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    username: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    idbook: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);


/* 
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
 */

export default Wish;
