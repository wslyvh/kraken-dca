import { AzureFunction, Context } from "@azure/functions";

const accountWithdraw: AzureFunction = async function (context: Context, timer: any): Promise<void> {
  const timeStamp = new Date().toISOString();

  if (timer.isPastDue) {
    context.log("Withdraw Timer function is running late!");
  }
  context.log("Withdraw Timer trigger function ran!", timeStamp);
};

export default accountWithdraw;
