import { AzureFunction, Context } from "@azure/functions";

const accountTrade: AzureFunction = async function (context: Context, timer: any): Promise<void> {
  const timeStamp = new Date().toISOString();

  if (timer.isPastDue) {
    context.log("Trade Timer function is running late!");
  }
  context.log("Trade Timer trigger function ran!", timeStamp);
};

export default accountTrade;
