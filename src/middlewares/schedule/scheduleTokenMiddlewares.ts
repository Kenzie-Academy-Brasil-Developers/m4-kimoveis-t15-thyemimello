import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

const tokenScheduleMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realId: number = parseInt(req.params.id);

  const realFind = await realEstateRepository.findOne({
    where: {
      id: realId,
    },
  });

  if (!realFind) {
    throw new AppError("RealEstate not found", 404);
  }


  return next();
};

export { tokenScheduleMiddlewares };
