### \*\* THIS IS PROJECT IS A WORK IN PROGRESS. USE AT YOUR OWN RISK!

# kraken-dca

A tool to help DCA your crypto investments. Dollar cost averaging (DCA) is an investment strategy that aims to reduce the impact of volatility on large purchases of financial assets such as equities.

## Supports

**Exchanges**

- Kraken

**Fiat**

- EUR

**Crypto**

- BTC
- ETH

**Cloud provider**

- AWS (with Serverless)

## Configure

Run this yourself?

- Fork this repo
- Signup at [Serverless](serverless.com)
- Create a new App, with deployment profile your service & env. variables
- Create [AWS account](http://aws.amazon.com/)
- Link Serverless with AWS. [Link](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- Create a [Kraken account](https://www.kraken.com/)
- Verify your account for Fiat funding
- Create Kraken API keys: Query funds, withdraw funds & modify/orders (if you don’t want automated withdrawals you can uncheck it. Don't forget to disable the withdraw functions in the serverless.yml)
- Add a Withdrawal address - default name: eth
- Create env variables (see [example.env](example.env))
- Deploy `npm run deploy`

To automate this further, go to your bank account and set up a recurring payment to your Kraken EUR funding account

**Default Fees apply**

- 0,26% maker fees for your trade (0,13 op 50 eu)
- 0.005 ETH withdrawal fee
- ~0,73ct at a price of €100/ETH
- ~1,39ct at a price of €250/ETH

## TODO

- Reduce Package size: check dependencies, exclude files from sls
- Use limit orders for lower % fees
