import { APIGatewayProxyHandler } from "aws-lambda";
import { IHandlerResponse } from "./types";

export const trade: APIGatewayProxyHandler = async () => {
  console.log("EXEC account.trade");

  const response: IHandlerResponse = {
    statusCode: 200,
    body: "Success. Account Trade"
  };

  return response;
};

export const withdraw: APIGatewayProxyHandler = async () => {
  console.log("EXEC account.withdraw");

  const response: IHandlerResponse = {
    statusCode: 200,
    body: "Success. Account Withdraw"
  };

  return response;
};
