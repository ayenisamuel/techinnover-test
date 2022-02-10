"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderFunctions = void 0;
const connections_1 = require("../config/connections");
const init_models_1 = require("../models/init-models");
const reminders_1 = require("../models/reminders");
const sequelize_1 = require("sequelize");
class ReminderFunctions {
    constructor() {
        this.createReminder = async (data) => {
            try {
                let newReminder = {
                    user: data.user,
                    description: data.description,
                    date: new Date(),
                };
                return await reminders_1.reminders.create(newReminder);
            }
            catch (error) {
                console.log(error);
                throw "Internal server error";
            }
        };
        this.getAllReminder = async (user, value) => {
            try {
                if (user == NaN && value == NaN) {
                    return await reminders_1.reminders.findAll();
                }
                return await reminders_1.reminders.findAll({
                    where: {
                        user: {
                            [sequelize_1.Op.or]: user,
                        },
                        date: {
                            [sequelize_1.Op.gte]: new Date(value),
                        },
                    },
                    order: [["id", "ASC"]],
                });
            }
            catch (error) {
                console.log(error);
                throw "Internal server error";
            }
        };
        this.getReminderById = async (id) => {
            try {
                return await reminders_1.reminders.findByPk(id);
            }
            catch (error) {
                console.log(error);
                throw "Internal server error";
            }
        };
        this.connection = new connections_1.Connections();
        (0, init_models_1.initModels)(this.connection.dbCon);
    }
}
exports.ReminderFunctions = ReminderFunctions;
