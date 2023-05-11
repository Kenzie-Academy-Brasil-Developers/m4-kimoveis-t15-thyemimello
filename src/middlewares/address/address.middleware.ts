import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";
import { AppError } from "../../errors";
import { Repository } from "typeorm";


const addressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const addressRepository: Repository<Address> =
  AppDataSource.getRepository(Address);

const addressMid = req.body.address.zipCode;

const addressFind = await addressRepository.findOne({
  where: {
    zipCode: addressMid,
  },
});

if (addressFind?.zipCode === addressMid) {
  throw new AppError("Address already exists", 409);
}

return next();
};

export default addressMiddleware;
