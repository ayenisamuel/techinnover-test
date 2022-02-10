"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderManger = void 0;
const reminderFunction_1 = require("../repositories/reminderFunction");
const standardResponse_1 = require("../helpers/standardResponse");
class ReminderManger {
    constructor() {
        this.newReminder = async (data) => {
            let reminder = await this._reminderFunction.createReminder(data);
            if (reminder)
                return standardResponse_1.StandardResponse.SuccessMessage("Reminder added successfully", reminder);
            return standardResponse_1.StandardResponse.ErrorMessage("Failed to create reminder");
        };
        this.getAllReminder = async (user, after) => {
            let collection = await this._reminderFunction.getAllReminder(user, after);
            if (collection)
                return standardResponse_1.StandardResponse.SuccessMessage("Data fetched successfully", collection);
            return standardResponse_1.StandardResponse.ErrorMessage("Failed to fetch data");
        };
        this.getReminderById = async (id) => {
            let reminder = await this._reminderFunction.getReminderById(id);
            if (reminder)
                return standardResponse_1.StandardResponse.SuccessMessage("Data fetched successfully", reminder);
            return standardResponse_1.StandardResponse.ErrorMessage("ID not found");
        };
        this._reminderFunction = new reminderFunction_1.ReminderFunctions();
    }
}
exports.ReminderManger = ReminderManger;
