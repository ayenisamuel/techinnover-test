"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
class config {
    constructor() {
        this.config = {
            env: "development",
            JWTPRIVATEKEY: process.env.JWT_KEY,
        };
    }
}
exports.config = config;
