import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";

const categoryExistiMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categorys = req.body.name;

  const categoryFind = await categoriesRepository.findOne({
    where: {
      name: categorys,
    },
  });

  if (categoryFind) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export { categoryExistiMiddleware };