import { APIGatewayProxyHandler, APIGatewayEvent } from "aws-lambda";

interface IHandlerResponse {
  statusCode: number;
  body: string;
}

export const defaultFunction: APIGatewayProxyHandler = async (event: APIGatewayEvent, context) => {
  console.log("Hello Handler!");

  const response: IHandlerResponse = {
    statusCode: 200,
    body: "Hello handler!"
  };

  return response;
};
