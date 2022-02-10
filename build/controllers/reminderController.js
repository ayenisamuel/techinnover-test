"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderController = void 0;
const routeResponse_1 = require("../helpers/routeResponse");
const reminderManager_1 = require("../managers/reminderManager");
class ReminderController {
    constructor() {
        this.createReminder = async (req, res) => {
            try {
                let newReminder = await this._reminderManager.newReminder(req.body);
                if (!newReminder.status)
                    return routeResponse_1.BaseRouter.BadRequest(newReminder, res);
                return routeResponse_1.BaseRouter.OkMessage201(newReminder, res);
            }
            catch (error) {
                console.log(error);
                return routeResponse_1.BaseRouter.InternalServerError(res);
            }
        };
        this.GetReminders = async (req, res) => {
            try {
                var userId = parseInt(req.query.user);
                var time = parseInt(req.query.after);
                let collections = await this._reminderManager.getAllReminder(userId, time);
                if (!collections.status)
                    return routeResponse_1.BaseRouter.BadRequest(collections, res);
                return routeResponse_1.BaseRouter.OkMessage(collections, res);
            }
            catch (error) {
                console.log(error);
                return routeResponse_1.BaseRouter.InternalServerError(res);
            }
        };
        this.GetReminderById = async (req, res) => {
            try {
                var Id = parseInt(req.params.id);
                let collection = await this._reminderManager.getReminderById(Id);
                if (!collection.status)
                    return routeResponse_1.BaseRouter.BadRequest(collection, res);
                return routeResponse_1.BaseRouter.OkMessage(collection, res);
            }
            catch (error) {
                console.log(error);
                return routeResponse_1.BaseRouter.InternalServerError(res);
            }
        };
        this._reminderManager = new reminderManager_1.ReminderManger();
    }
}
exports.ReminderController = ReminderController;
