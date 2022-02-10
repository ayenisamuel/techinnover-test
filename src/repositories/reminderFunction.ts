import { Connections } from "../config/connections";
import { initModels } from "../models/init-models";
import { ReminderRequest } from "../variables/reminderRequest";
import { reminders } from "../models/reminders";
import { Op } from "sequelize";

export class ReminderFunctions {
  connection!: Connections;

  constructor() {
    this.connection = new Connections();
    initModels(this.connection.dbCon);
  }

  createReminder = async (data: ReminderRequest) => {
    try {
      let newReminder = {
        user: data.user,
        description: data.description,
        date: new Date(),
      };
      return await reminders.create(newReminder);
    } catch (error) {
      console.log(error);
      throw "Internal server error";
    }
  };

  getAllReminder = async (user: number, value: number) => {
    try {
      if (user == NaN && value == NaN) {
        return await reminders.findAll();
      }
      return await reminders.findAll({
        where: {
          user: {
            [Op.or]: user,
          },
          date: {
            [Op.gte]: new Date(value),
          },
        },
        order: [["id", "ASC"]],
      });
    } catch (error) {
      console.log(error);
      throw "Internal server error";
    }
  };

  getReminderById = async (id: number) => {
    try {
      return await reminders.findByPk(id);
    } catch (error) {
      console.log(error);
      throw "Internal server error";
    }
  };
}
