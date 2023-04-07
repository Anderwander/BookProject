import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bookshare", "root", "mi-contraseña", {
host:"mysql-bookproject",
port:3306,
dialect: "mysql"
});

export default sequelize;