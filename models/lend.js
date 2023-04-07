import connection from "../config/orm.js";
import Sequelize from "sequelize";
import Book from "./book.js";
import Usersql from "./usersql.js";

const Lend = connection.define(
  "lend",
  {
    idlend: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    request_date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    return_date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    idreceiver: {
      type: Sequelize.INTEGER,
    },
    idsender: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idbook: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    finish: {
      type: Sequelize.TINYINT,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
/* Lend.belongsToMany(Book, {
  foreignKey: "idbook",
}); 
Book.hasMany(Lend, {
  foreignKey: "idbook",
}); */

export default Lend;
