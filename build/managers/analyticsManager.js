"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticManager = void 0;
const standardResponse_1 = require("../helpers/standardResponse");
const analyticsFunctions_1 = require("../repositories/analyticsFunctions");
class AnalyticManager {
    constructor() {
        this.newEvent = async (eventRequest) => {
            let count = 0;
            eventRequest.forEach(async (element) => {
                if (element.eventType == "click") {
                    let clickValidation = await this._analyticFunction.clickEventValidation(element.user);
                    if (clickValidation) {
                        let newEvent = await this._analyticFunction.createEvent(element);
                        console.log({ newEvent });
                        if (newEvent)
                            count + 1;
                    }
                }
                if (element.eventType == "pageView") {
                    let viewValidation = await this._analyticFunction.pageViewValidation(element.user);
                    if (viewValidation) {
                        let viewEvent = await this._analyticFunction.createEvent(element);
                        console.log({ viewEvent });
                        if (viewEvent)
                            count + 1;
                    }
                }
            });
            return standardResponse_1.StandardResponse.SuccessMessage("Event added successfully", {
                ingested: count,
            });
        };
        this.getAllEvent = async () => {
            let collection = await this._analyticFunction.getAllEvent();
            if (collection)
                return standardResponse_1.StandardResponse.SuccessMessage("Data fetched successfully", collection);
            return standardResponse_1.StandardResponse.ErrorMessage("Failed to fetch data");
        };
        this._analyticFunction = new analyticsFunctions_1.AnalyticFunctions();
    }
}
exports.AnalyticManager = AnalyticManager;
