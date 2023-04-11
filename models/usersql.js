import connection from "../config/orm.js";
import Sequelize from "sequelize";



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
*/







export default User;
