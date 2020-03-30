import ccxt from "ccxt";
import AppConfig = require("../config/App");

export class KrakenExchange {
  private client: any;

  public constructor() {
    this.client = new ccxt.kraken({
      apiKey: AppConfig.API_KEY,
      secret: AppConfig.API_SECRET
    });

    // console.log(this.client.has);
  }

  public async price(symbol: string): Promise<number> {
    const ticker = await this.client.fetch_ticker(symbol);
    return ticker.last;
  }

  public async balance(symbol: "BTC" | "ETH" | "EUR"): Promise<number> {
    const balance = await this.client.fetchBalance();

    if (symbol === "BTC" && balance.BTC) {
      return balance.BTC.total;
    }
    if (symbol === "ETH" && balance.ETH) {
      return balance.ETH.total;
    }
    if (symbol === "EUR" && balance.EUR) {
      return balance.EUR.total;
    }

    return 0;
  }

  public async createOrder(type: "BUY" | "SELL", symbol: string, amount: number) {
    // e.g. ETH (base) / EUR (quote)
    const basePrice = await this.price(symbol);
    const quoteAmount = this.client.amountToPrecision(symbol, amount / basePrice);
    console.log(type, quoteAmount);
    console.log("Create", type, amount, quoteAmount);

    if (AppConfig.EXECUTE_MODE) {
      if (type === "BUY") {
        const order = await this.client.createMarketBuyOrder(symbol, quoteAmount);
        console.log(order);
      }
      if (type === "SELL") {
        const order = await this.client.createMarketSellOrder(symbol, quoteAmount);
        console.log(order);
      }
    }
  }

  public async withdraw(symbol: "BTC" | "ETH", address: string, amount?: number, walletDescription?: string) {
    // if no amount is specified, it withdraws all available balance
    if (!amount) {
      amount = await this.balance(symbol);
    }
    // to withdraw from Kraken you need to add a withdrawal address on Kraken first and add the description (default is 'eth')
    let params = {};
    if (walletDescription) {
      params = { key: walletDescription };
    }
    console.log("Withdraw", symbol, amount, address);

    if (AppConfig.EXECUTE_MODE) {
      const withdrawal = await this.client.withdraw(symbol, amount, address, null, params);
      console.log(withdrawal);
    }
  }
}
