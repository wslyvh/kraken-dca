import { APIGatewayProxyHandler, APIGatewayEvent, Context } from "aws-lambda";
import { IHandlerResponse } from "./types";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  console.log("EXEC default.handler");

  const response: IHandlerResponse = {
    statusCode: 200,
    body: "Success. Default Handler"
  };

  return response;
};
