import connection from "../config/orm.js";
import Sequelize from "sequelize";

const User = connection.define("users",{
    iduser:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: Sequelize.STRING(100),
        allowNull: false,
    },
},
{
    freezeTableName: true,
    timestamps: false
});

export default User;
