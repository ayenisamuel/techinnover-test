import * as express from "express";
import { BaseRouter } from "../helpers/routeResponse";
import { AnalyticManager } from "../managers/analyticsManager";

export class AnalyticController {
  _analyticManger: AnalyticManager;

  constructor() {
    this._analyticManger = new AnalyticManager();
  }

  createEvent = async (req: express.Request, res: express.Response) => {
    try {
      let newEvent = await this._analyticManger.newEvent(req.body);

      if (!newEvent.status) return BaseRouter.BadRequest(newEvent, res);
      return BaseRouter.OkMessage201(newEvent, res);
    } catch (error) {
      console.log(error);
      return BaseRouter.InternalServerError(res);
    }
  };

  getAllEvent = async (req: express.Request, res: express.Response) => {
    try {
      let allCollection = await this._analyticManger.getAllEvent();

      if (!allCollection.status)
        return BaseRouter.BadRequest(allCollection, res);
      return BaseRouter.OkMessage(allCollection, res);
    } catch (error) {
      console.log(error);
      return BaseRouter.InternalServerError(res);
    }
  };
}
