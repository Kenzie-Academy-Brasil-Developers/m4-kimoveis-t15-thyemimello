import { Request, Response } from "express";
import { TUser } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import deleteUserService from "../services/users/deleteUser.service";
import updateUserService from "../services/users/updateUser.service";


const createUserController = async (req: Request, resp: Response) => {
  const userData: TUser = req.body;

  const newUser = await createUserService(userData);

  return resp.status(201).json(newUser);
};

const listUseresController = async (req: Request, res: Response) => {
  const usersAll = await listUsersService();

  return res.json(usersAll);
};

const deleteUserController = async (req: Request, res: Response) => {
  const idUser: number = parseInt(req.params.id);

  await deleteUserService(idUser);

  return res.status(204).send();
};

const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const userId: number = parseInt(req.params.id);

  const userUpdate = await updateUserService(userData, userId);

  return res.status(200).json(userUpdate);
};

export {
  createUserController,
  listUseresController,
  deleteUserController,
  updateUserController,
};
