import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule} from "../../entities";

const getSchedulesService = async (realId: number) => {
  const realEstate = AppDataSource.getRepository(RealEstate);

  const realEstateResult: RealEstate | null = await realEstate.findOne({
    where: {
     id: realId
    },
    relations: {
      schedules: {
        user: true,
      },
      address: true,
      category: true,
    },
  });

return realEstateResult;
};

export { getSchedulesService };
