import connection from "../config/orm.js";
import Sequelize from "sequelize";



const Book = connection.define("book",{
    idbook:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    book_cover:{
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false,
        required: true
    },
    type: {
        type: Sequelize.STRING(45),
        allowNull: true
    },
    writer: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    synopsis: {
        type: Sequelize.STRING(300),
        allowNull: false,
    },
    /* ISBN:{
        type: Sequelize.BIGINT(20),
        allowNull: false
    },*/
},
{

    timestamps: false
});


  
 


export default Book;

