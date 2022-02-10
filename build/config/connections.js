"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connections = void 0;
const sequelize_1 = require("sequelize");
const environment_1 = require("./environment");
class Connections {
    constructor() {
        this.dbCon = new sequelize_1.Sequelize(environment_1.Environments.DATABASE, environment_1.Environments.DBUSERNAME, environment_1.Environments.DBPASSWORD, {
            dialect: environment_1.Environments.DBDIALECT,
            port: environment_1.Environments.DB_PORT,
            host: environment_1.Environments.DBHOST,
        });
        try {
            this.dbCon
                .authenticate()
                .then(() => {
                console.log("Connection has been established successfully.");
            })
                .catch((error) => {
                console.log(error);
            });
        }
        catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    }
}
exports.Connections = Connections;
