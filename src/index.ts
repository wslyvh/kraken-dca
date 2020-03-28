import { KrakenExchange } from "./exchanges/KrakenExchange";
import AppConfig from "./config/App";

console.log("Hello world");
Test();

async function Test() {
  console.log("Testing..");

  const exchange = new KrakenExchange();
  let price = 0;
  let balance = 0;

  console.log("BALANCE.");
  // ==
  price = await exchange.price("BTC/EUR");
  balance = await exchange.balance("BTC");
  console.log("BTC", "Balance", balance, "Price", price);

  price = await exchange.price("ETH/EUR");
  balance = await exchange.balance("ETH");
  console.log("ETH", "Balance", balance, "Price", price);

  balance = await exchange.balance("EUR");
  console.log("EUR", "Balance", balance);

  console.log("TRADE.");
  // ==
  await exchange.createOrder("BUY", "ETH/EUR", AppConfig.DEFAULT_ORDER_AMOUNT); // amount in quote currency

  console.log("DONE.");
}
