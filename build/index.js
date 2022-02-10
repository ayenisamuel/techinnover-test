"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const environment_1 = require("./config/environment");
const express = __importStar(require("express"));
const router = express.Router();
const app = express.default();
const cors_1 = __importDefault(require("cors"));
const apis_1 = __importDefault(require("./routes/apis"));
const logger_1 = __importDefault(require("./middleware/logger"));
const options = {
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
    credentials: true,
};
if (environment_1.Environments.NODE_ENV === "development") {
    console.log("mode development");
}
app.use((0, cors_1.default)());
app.use(new logger_1.default().logger);
app.use(express.json());
app.use(new apis_1.default().apis());
const port = environment_1.Environments.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
exports.route = router;
