import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const handleErrors =  (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
    
  }
  if (error instanceof ZodError) { return response.status(400).json({ message: error.flatten().fieldErrors,});
  }
  console.log(error);

  return response.status(403).json({ message: "Internal server Error" });
};
export { AppError, handleErrors };
