import { APIGatewayProxyHandler } from "aws-lambda";
import { IHandlerResponse } from "./types";

export const withdraw: APIGatewayProxyHandler = async () => {
  console.log("EXEC account.withdraw");

  const response: IHandlerResponse = {
    statusCode: 200,
    body: "Success. Account Withdraw"
  };

  return response;
};
