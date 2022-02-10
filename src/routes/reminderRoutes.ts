import * as express from "express";
import { ReminderController } from "../controllers/reminderController";

export class ReminderRoute {
  _reminderController: ReminderController;

  constructor() {
    this._reminderController = new ReminderController();
  }

  public routes(): express.Router {
    const router = express.Router();

    router.route("/reminders").post(this._reminderController.createReminder);

    router.route("/reminders").get(this._reminderController.GetReminders);

    router
      .route("/reminders/:id")
      .get(this._reminderController.GetReminderById);

    return router;
  }
}
