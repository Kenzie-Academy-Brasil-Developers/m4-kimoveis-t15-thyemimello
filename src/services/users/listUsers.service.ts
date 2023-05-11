import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { returnMultipleUserSchema } from "../../schemas/user.schemas";
import { TUsersReturnAll } from "../../interfaces/user.interfaces";
import { User } from "../../entities/user.entity";




const listUsersService = async (): Promise<TUsersReturnAll> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers = await userRepository.find();

  const users = returnMultipleUserSchema.parse(findUsers);

  return users;
};

export { listUsersService };
