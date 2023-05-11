import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

const scheduleNotExistiMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realId: number = request.body.realEstateId;

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

export { scheduleNotExistiMiddleware };
