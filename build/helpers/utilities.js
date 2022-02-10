"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
class Utilities {
    static MapTo(data) {
        let jsonString = JSON.stringify(data);
        return JSON.parse(jsonString);
    }
}
exports.Utilities = Utilities;
