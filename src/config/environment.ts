import * as env from "env-var";
import { EnvKey } from "../enums/environment_key";
import * as dotenv from "dotenv";
dotenv.config();

const DB_PORT: number = env.get(EnvKey.DBPORT).default(3306).asInt();
const DATABASE: string = env.get(EnvKey.DATABASE).asString() as string;
const DBPASSWORD: string = env.get(EnvKey.DBPASSWORD).asString() as string;
const DBUSERNAME: string = env.get(EnvKey.DBUSERNAME).asString() as string;
const DBHOST: string = env.get(EnvKey.HOST).default("localhost").asString();
const DBDIALECT: string = env.get(EnvKey.DBDIALECT).default("mysql").asString();
const Port: number = env.get(EnvKey.PORT).asInt() as number;
const NODE_ENV: string = env.get(EnvKey.NODE_ENV).asString() as string;
const JWT_KEY: string = env.get(EnvKey.JWT_KEY).asString() as string;
const BaseUrl: string = env.get(EnvKey.BaseUrl).asString() as string;

export const Environments = {
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
