import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { returnUserNotPasswordSchema} from "../../schemas/user.schemas";
import { TUser, TUserReturnNotPassword } from "../../interfaces/user.interfaces";
import { User } from "../../entities/user.entity";




const createUserService = async (userData: TUser): Promise<TUserReturnNotPassword> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnUserNotPasswordSchema.parse(user);

  return newUser;
};

export { createUserService };
