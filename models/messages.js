import connection from "../config/orm.js";
import Sequelize from "sequelize";

const Messages = connection.define("book",{
    idchat:{
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    idwriter:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
},
{

    timestamps: false
});

export default Messages;
