import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user.entity";



const ensureEmailAlreadyExistisMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userEmail: string = req.body.email;

  const emailFind = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  if (emailFind?.email === userEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export { ensureEmailAlreadyExistisMiddleware };
