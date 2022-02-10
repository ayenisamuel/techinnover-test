import { ReminderFunctions } from "../repositories/reminderFunction";
import { ReminderRequest } from "../variables/reminderRequest";
import { StandardResponse } from "../helpers/standardResponse";

export class ReminderManger {
  _reminderFunction: ReminderFunctions;

  constructor() {
    this._reminderFunction = new ReminderFunctions();
  }

  newReminder = async (data: ReminderRequest) => {
    let reminder = await this._reminderFunction.createReminder(data);

    if (reminder)
      return StandardResponse.SuccessMessage(
        "Reminder added successfully",
        reminder
      );
    return StandardResponse.ErrorMessage("Failed to create reminder");
  };

  getAllReminder = async (user: number, after: number) => {
    let collection = await this._reminderFunction.getAllReminder(user, after);

    if (collection)
      return StandardResponse.SuccessMessage(
        "Data fetched successfully",
        collection
      );
    return StandardResponse.ErrorMessage("Failed to fetch data");
  };

  getReminderById = async (id: number) => {
    let reminder = await this._reminderFunction.getReminderById(id);

    if (reminder)
      return StandardResponse.SuccessMessage(
        "Data fetched successfully",
        reminder
      );
    return StandardResponse.ErrorMessage("ID not found");
  };
}
