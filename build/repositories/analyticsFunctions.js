"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticFunctions = void 0;
const connections_1 = require("../config/connections");
const init_models_1 = require("../models/init-models");
const sequelize_1 = require("sequelize");
class AnalyticFunctions {
    constructor() {
        this.createEvent = async (data) => {
            try {
                let newEvent = await init_models_1.analytics.create({
                    user: data.user,
                    eventType: data.eventType,
                    date: new Date(),
                });
                return newEvent;
            }
            catch (error) {
                console.log(error);
                throw "Internal server error";
            }
        };
        this.clickEventValidation = async (userId) => {
            try {
                let newDate = new Date(Date.now() - 30000);
                return await init_models_1.analytics.findOne({
                    where: {
                        [sequelize_1.Op.and]: [
                            {
                                user: userId,
                            },
                            {
                                date: {
                                    [sequelize_1.Op.lte]: newDate,
                                },
                            },
                        ],
                    },
                });
            }
            catch (error) {
                console.log(error);
                throw "Internal server error";
            }
        };
        this.pageViewValidation = async (userId) => {
            try {
                let pageDate = new Date(Date.now() - 50000);
                return await init_models_1.analytics.findOne({
                    where: {
                        [sequelize_1.Op.and]: [
                            {
                                user: userId,
                            },
                            {
                                date: {
                                    [sequelize_1.Op.lte]: pageDate,
                                },
                            },
                        ],
                    },
                });
            }
            catch (error) {
                console.log(error);
                throw "Internal server error";
            }
        };
        this.getAllEvent = async () => {
            try {
                return await init_models_1.analytics.findAll();
            }
            catch (error) { }
        };
        this.connection = new connections_1.Connections();
        (0, init_models_1.initModels)(this.connection.dbCon);
    }
}
exports.AnalyticFunctions = AnalyticFunctions;
