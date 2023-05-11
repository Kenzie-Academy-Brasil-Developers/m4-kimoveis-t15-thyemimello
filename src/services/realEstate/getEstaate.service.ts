import { AppDataSource } from "../../data-source";
import { RealEstate} from "../../entities";
import { Repository } from "typeorm";
import { RealReturnAll } from "../../interfaces/realEsate.interface";
import { returnMultRealSchema } from "../../schemas";

const getRealEstatesServices = async (): Promise<RealReturnAll> => {
  const realRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

    const user = await realRepository.find({
      relations: {
        address: true,
      },
    });
  
    const returnAllRealEstate = returnMultRealSchema.parse(user);
  
    return returnAllRealEstate;
  };

export { getRealEstatesServices };
