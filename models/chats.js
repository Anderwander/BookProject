import connection from "../config/orm.js";
import Sequelize from "sequelize";

const Chats = connection.define("book",{
    idasker:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    idchat:{
        type: Sequelize.STRING(45),
        primaryKey: true,
        allowNull: false,
    },
    idlend: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
},
{

    timestamps: false
});

export default Chats;
