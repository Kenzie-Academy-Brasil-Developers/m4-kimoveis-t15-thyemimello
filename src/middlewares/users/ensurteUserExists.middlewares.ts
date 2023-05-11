import { Repository } from "typeorm";
import { AppError } from "../../errors";
import { AppDataSource } from "../../data-source";
import { Request, Response, NextFunction } from "express";
import { User } from "../../entities/user.entity";




const ensureUserExists = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOne({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!userFind ) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default ensureUserExists;
