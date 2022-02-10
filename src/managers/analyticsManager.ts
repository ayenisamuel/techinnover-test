import { StandardResponse } from "../helpers/standardResponse";
import { AnalyticFunctions } from "../repositories/analyticsFunctions";
import { EventRequest } from "../variables/eventRequest";

export class AnalyticManager {
  _analyticFunction: AnalyticFunctions;

  constructor() {
    this._analyticFunction = new AnalyticFunctions();
  }

  newEvent = async (eventRequest: EventRequest[]) => {
    let count = 0;
    eventRequest.forEach(async (element) => {
      if (element.eventType == "click") {
        let clickValidation = await this._analyticFunction.clickEventValidation(
          element.user
        );
        if (clickValidation) {
          let newEvent = await this._analyticFunction.createEvent(element);
          console.log({ newEvent });
          if (newEvent) count + 1;
        }
      }
      if (element.eventType == "pageView") {
        let viewValidation = await this._analyticFunction.pageViewValidation(
          element.user
        );
        if (viewValidation) {
          let viewEvent = await this._analyticFunction.createEvent(element);
          console.log({ viewEvent });
          if (viewEvent) count + 1;
        }
      }
    });
    return StandardResponse.SuccessMessage("Event added successfully", {
      ingested: count,
    });
  };

  getAllEvent = async () => {
    let collection = await this._analyticFunction.getAllEvent();

    if (collection)
      return StandardResponse.SuccessMessage(
        "Data fetched successfully",
        collection
      );
    return StandardResponse.ErrorMessage("Failed to fetch data");
  };
}
