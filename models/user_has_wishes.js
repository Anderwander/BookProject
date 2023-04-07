import connection from "../config/orm.js";
import Sequelize from "sequelize";

const Wish = connection.define(
  "user_has_wishes",
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

export default Wish;
