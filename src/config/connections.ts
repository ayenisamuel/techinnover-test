import { Dialect, Sequelize } from "sequelize";
import { Environments } from "./environment";

export class Connections {
  dbCon: Sequelize;
  constructor() {
    this.dbCon = new Sequelize(
      Environments.DATABASE,
      Environments.DBUSERNAME,
      Environments.DBPASSWORD,
      {
        dialect: Environments.DBDIALECT as Dialect,
        port: Environments.DB_PORT,
        host: Environments.DBHOST,
      }
    );

    try {
      this.dbCon
        .authenticate()
        .then(() => {
          console.log("Connection has been established successfully.");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}
