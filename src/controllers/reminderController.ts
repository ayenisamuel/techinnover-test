import * as express from "express";
import { BaseRouter } from "../helpers/routeResponse";
import { ReminderManger } from "../managers/reminderManager";

export class ReminderController {
  _reminderManager: ReminderManger;

  constructor() {
    this._reminderManager = new ReminderManger();
  }

  createReminder = async (req: express.Request, res: express.Response) => {
    try {
      let newReminder = await this._reminderManager.newReminder(req.body);

      if (!newReminder.status) return BaseRouter.BadRequest(newReminder, res);
      return BaseRouter.OkMessage201(newReminder, res);
    } catch (error) {
      console.log(error);
      return BaseRouter.InternalServerError(res);
    }
  };

  GetReminders = async (req: express.Request, res: express.Response) => {
    try {
      var userId = parseInt(req.query.user as string);
      var time = parseInt(req.query.after as string);

      let collections = await this._reminderManager.getAllReminder(
        userId,
        time
      );

      if (!collections.status) return BaseRouter.BadRequest(collections, res);
      return BaseRouter.OkMessage(collections, res);
    } catch (error) {
      console.log(error);
      return BaseRouter.InternalServerError(res);
    }
  };

  GetReminderById = async (req: express.Request, res: express.Response) => {
    try {
      var Id = parseInt(req.params.id as string);

      let collection = await this._reminderManager.getReminderById(Id);

      if (!collection.status) return BaseRouter.BadRequest(collection, res);
      return BaseRouter.OkMessage(collection, res);
    } catch (error) {
      console.log(error);
      return BaseRouter.InternalServerError(res);
    }
  };
}
