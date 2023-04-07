import connection from "../config/orm.js";
import Sequelize from "sequelize";
import Lend from "./lend.js";
import Book from "./book.js";

const User = connection.define(
  "users",
  {
    iduser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
/* 
User.hasMany(Lend, {
  foreignKey: "idsender",
});

User.hasMany(Lend, {
  foreignKey: "idreceiver",
});

User.hasMany(Book, {
  through: "user_has_wishes",
  foreignKey: "iduser",
  timestamps: false,
  otherKey: "idbook",
}); */

export default User;
