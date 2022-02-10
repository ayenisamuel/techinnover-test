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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environments = void 0;
const env = __importStar(require("env-var"));
const environment_key_1 = require("../enums/environment_key");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const DB_PORT = env.get(environment_key_1.EnvKey.DBPORT).default(3306).asInt();
const DATABASE = env.get(environment_key_1.EnvKey.DATABASE).asString();
const DBPASSWORD = env.get(environment_key_1.EnvKey.DBPASSWORD).asString();
const DBUSERNAME = env.get(environment_key_1.EnvKey.DBUSERNAME).asString();
const DBHOST = env.get(environment_key_1.EnvKey.HOST).default("localhost").asString();
const DBDIALECT = env.get(environment_key_1.EnvKey.DBDIALECT).default("mysql").asString();
const Port = env.get(environment_key_1.EnvKey.PORT).asInt();
const NODE_ENV = env.get(environment_key_1.EnvKey.NODE_ENV).asString();
const JWT_KEY = env.get(environment_key_1.EnvKey.JWT_KEY).asString();
const BaseUrl = env.get(environment_key_1.EnvKey.BaseUrl).asString();
exports.Environments = {
    DB_PORT,
    DATABASE,
    DBPASSWORD,
    DBUSERNAME,
    DBHOST,
    DBDIALECT,
    Port,
    NODE_ENV,
    JWT_KEY,
    BaseUrl,
};
