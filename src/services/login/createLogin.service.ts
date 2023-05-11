import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { login } from "../../interfaces";
import { User } from "../../entities";


const createLoginService = async (loginData: login): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userEmail: string = loginData.email;

  const emailFind = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  if (!emailFind) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPass: boolean = await compare(
    loginData.password,
    emailFind.password
  );

  if (!matchPass) {
    throw new AppError("Invalid credentials", 401);
  }

  const LoginToken: string = jwt.sign(
    {
      admin: emailFind.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: emailFind.id.toString(),
    }
  );

  return LoginToken;
};

export { createLoginService };
