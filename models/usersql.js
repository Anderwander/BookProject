import connection from "../config/orm.js";
import Sequelize from "sequelize";



const User = connection.define(
  "users",
  {
    username: {
      type: Sequelize.STRING(100),
      primaryKey: true,
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
