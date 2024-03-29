import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureNoAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdmin: boolean = res.locals.admin

  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureNoAdminMiddleware;
