import * as express from "express";
import { AnalyticController } from "../controllers/analyticController";

export class AnalyticRoute {
  _analyticController: AnalyticController;

  constructor() {
    this._analyticController = new AnalyticController();
  }

  public routes(): express.Router {
    const router = express.Router();

    router.route("/analytics").post(this._analyticController.createEvent);

    router.route("/analytics").get(this._analyticController.getAllEvent);

    return router;
  }
}
