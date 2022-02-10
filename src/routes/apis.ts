import * as express from "express";
import { AnalyticRoute } from "./analyticRoute";
import { ReminderRoute } from "./reminderRoutes";

export default class AllApi {
  public apis(): express.Router {
    const api = express.Router();
    let baseUrl = "/techinnover-test";

    api.use(baseUrl, new AnalyticRoute().routes());
    api.use(baseUrl, new ReminderRoute().routes());

    return api;
  }
}
