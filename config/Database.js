import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    username: "root",
    password: "root",
    port: 8889

});
 
export default db;