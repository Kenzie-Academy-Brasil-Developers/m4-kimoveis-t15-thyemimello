import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate} from "../../entities";

import {
  RealEstateRequest,
  RealEstateReturn,
} from "../../interfaces/realEsate.interface";
import { returnRealSchema } from "../../schemas";

const createRealEstateService = async (
  realEstateData: RealEstateRequest
): Promise<RealEstateReturn> => {

  const realEstateRepository: Repository<RealEstate> =
  AppDataSource.getRepository(RealEstate);

const addressRepository: Repository<Address> =
  AppDataSource.getRepository(Address);

const categoriesRepository: Repository<Category> =
  AppDataSource.getRepository(Category);

const findCategory = await categoriesRepository.findOne({
  where: {
    id: realEstateData.categoryId!,
  },
});

const newAddress = addressRepository.create({
  ...realEstateData.address,
});
await addressRepository.save(newAddress);

const newRealEstate = realEstateRepository.create({
  ...realEstateData,
  address: newAddress,
  category: findCategory!,
});

await realEstateRepository.save(newRealEstate);

const returnRealEstate = returnRealSchema.parse(newRealEstate);

return returnRealEstate;
};
export { createRealEstateService };

