"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticController = void 0;
const routeResponse_1 = require("../helpers/routeResponse");
const analyticsManager_1 = require("../managers/analyticsManager");
class AnalyticController {
    constructor() {
        this.createEvent = async (req, res) => {
            try {
                let newEvent = await this._analyticManger.newEvent(req.body);
                if (!newEvent.status)
                    return routeResponse_1.BaseRouter.BadRequest(newEvent, res);
                return routeResponse_1.BaseRouter.OkMessage201(newEvent, res);
            }
            catch (error) {
                console.log(error);
                return routeResponse_1.BaseRouter.InternalServerError(res);
            }
        };
        this.getAllEvent = async (req, res) => {
            try {
                let allCollection = await this._analyticManger.getAllEvent();
                if (!allCollection.status)
                    return routeResponse_1.BaseRouter.BadRequest(allCollection, res);
                return routeResponse_1.BaseRouter.OkMessage(allCollection, res);
            }
            catch (error) {
                console.log(error);
                return routeResponse_1.BaseRouter.InternalServerError(res);
            }
        };
        this._analyticManger = new analyticsManager_1.AnalyticManager();
    }
}
exports.AnalyticController = AnalyticController;
