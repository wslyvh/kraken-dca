import * as dotenv from "dotenv";

dotenv.config();

const AppConfig = {
  NODE_ENV: process.env.NODE_ENV,
  EXECUTE_MODE: Boolean(process.env.EXECUTE_MODE) || true,

  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET,

  ORDER_AMOUNT: Number(process.env.ORDER_AMOUNT) || 25,
  WALLET_ADDRESS_ETH: process.env.WALLET_ADDRESS_ETH || "",
  WALLET_DESCRIPTION_ETH: process.env.WALLET_DESCRIPTION_ETH || "eth"
};

export = AppConfig;
