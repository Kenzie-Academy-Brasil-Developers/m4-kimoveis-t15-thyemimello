import { Repository } from "typeorm";
import { TUserUpdate } from "../../interfaces/user.interfaces";
import { AppDataSource } from "../../data-source";
import { returnUserNotPasswordSchema } from "../../schemas/user.schemas";
import { User } from "../../entities/user.entity";



const updateUserService = async ( userData: TUserUpdate, idUser: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userDataService = await userRepository.findOneBy({
    id: idUser,
  });

  const user = userRepository.create({
    ...userDataService,
    ...userData,
  });

  await userRepository.save(user);

  const userUpdate = returnUserNotPasswordSchema.parse(user);

  return userUpdate;
};

export default updateUserService;
