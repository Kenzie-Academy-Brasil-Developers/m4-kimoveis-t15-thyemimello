import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";

const categoryNotExistiMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const repositoryCategory: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryId = parseInt(req.params.id);

  const findCategory = await repositoryCategory.findOne({
    where: {
      id: categoryId,
    },
  });

  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }

  return next();
};

export { categoryNotExistiMiddleware };