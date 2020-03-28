import * as dotenv from "dotenv";

dotenv.config();

const AppConfig = {
  NODE_ENV: process.env.NODE_ENV,
  EXECUTE_MODE: Boolean(process.env.EXECUTE_MODE) || false,

  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET,

  DEFAULT_ORDER_AMOUNT: Number(process.env.DEFAULT_ORDER_AMOUNT) || 25
};

export = AppConfig;
