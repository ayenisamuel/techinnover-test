import { Connections } from "../config/connections";
import { analytics, initModels } from "../models/init-models";
import { Op } from "sequelize";
import { EventRequest } from "../variables/eventRequest";

export class AnalyticFunctions {
  connection!: Connections;

  constructor() {
    this.connection = new Connections();
    initModels(this.connection.dbCon);
  }

  createEvent = async (data: EventRequest) => {
    try {
      let newEvent = await analytics.create({
        user: data.user,
        eventType: data.eventType,
        date: new Date(),
      });
      return newEvent;
    } catch (error) {
      console.log(error);
      throw "Internal server error";
    }
  };

  clickEventValidation = async (userId: number) => {
    try {
      let newDate = new Date(Date.now() - 30000);
      return await analytics.findOne({
        where: {
          [Op.and]: [
            {
              user: userId,
            },
            {
              date: {
                [Op.lte]: newDate,
              },
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
      throw "Internal server error";
    }
  };

  pageViewValidation = async (userId: number) => {
    try {
      let pageDate = new Date(Date.now() - 50000);
      return await analytics.findOne({
        where: {
          [Op.and]: [
            {
              user: userId,
            },
            {
              date: {
                [Op.lte]: pageDate,
              },
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
      throw "Internal server error";
    }
  };

  getAllEvent = async () => {
    try {
      return await analytics.findAll();
    } catch (error) {}
  };
}
