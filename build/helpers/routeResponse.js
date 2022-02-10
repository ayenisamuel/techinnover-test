"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const standardResponse_1 = require("../helpers/standardResponse");
class BaseRouter {
}
exports.BaseRouter = BaseRouter;
BaseRouter.OkMessage = (data, res) => {
    return res.status(200).send(data);
};
BaseRouter.OkMessage201 = (data, res) => {
    return res.status(201).send(data);
};
BaseRouter.BadRequest = (data, res) => {
    return res.status(400).send(data);
};
BaseRouter.InternalServerError = (res) => {
    return res.status(500).send(standardResponse_1.StandardResponse.ServerError());
};
