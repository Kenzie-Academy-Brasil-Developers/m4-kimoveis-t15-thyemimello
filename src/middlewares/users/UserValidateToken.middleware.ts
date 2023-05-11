import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";

const userValidateTokenId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
   const isAdmin: boolean = res.locals.admin

  const tokenId: number = res.locals.id
  const userId: number = parseInt(req.params.id);

  if (isAdmin !== true && tokenId !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { userValidateTokenId };
