"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardResponse = void 0;
class StandardResponse {
    constructor(message, status, data = {}) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
exports.StandardResponse = StandardResponse;
StandardResponse.SuccessMessage = (message = "success", data = {}) => {
    return new StandardResponse(message, true, data);
};
StandardResponse.ErrorMessage = (message = "Your request cannot be proccessed at this time. Please try again later", data = null) => {
    return new StandardResponse(message, false, data);
};
StandardResponse.ServerError = () => {
    let mess = "Dear customer, we tried processing your request. However, there seems to be a connectivity issue. We advise you try again shortly.";
    return new StandardResponse(mess, false);
};
StandardResponse.TokenError = () => {
    let message = "Dear customer, your session has expired. Please login again to proceed";
    return new StandardResponse(message, false);
};
