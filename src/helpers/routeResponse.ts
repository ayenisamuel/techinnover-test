import * as express from "express";
import { StandardResponse } from "../helpers/standardResponse";

export class BaseRouter {
  public static OkMessage = (data: StandardResponse, res: express.Response) => {
    return res.status(200).send(data);
  };
  public static OkMessage201 = (
    data: StandardResponse,
    res: express.Response
  ) => {
    return res.status(201).send(data);
  };
  public static BadRequest = (
    data: StandardResponse,
    res: express.Response
  ) => {
    return res.status(400).send(data);
  };
  public static InternalServerError = (res: express.Response) => {
    return res.status(500).send(StandardResponse.ServerError());
  };
}
