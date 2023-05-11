import { Router } from "express";
import { createUserController, deleteUserController, listUseresController, updateUserController } from "../controllers/user.controller";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { updadeUserSchema, userSchema } from "../schemas/user.schemas";
import { ensureEmailAlreadyExistisMiddleware } from "../middlewares/users/ensureEmail.middlewares";
import { ensureTokenValidateMiddleware } from "../middlewares/userTokenValidate";
import ensureNoAdminMiddleware from "../middlewares/ensureNoAdmin.middleware";
import ensureUserExists from "../middlewares/users/ensurteUserExists.middlewares";
import { userValidateTokenId } from "../middlewares/users/UserValidateToken.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValid(userSchema),
  ensureEmailAlreadyExistisMiddleware,
  createUserController
);
userRoutes.get(
  "",
  ensureTokenValidateMiddleware,
  ensureNoAdminMiddleware,
  listUseresController
);
userRoutes.delete(
  "/:id",
  ensureTokenValidateMiddleware,
  ensureUserExists,
  ensureNoAdminMiddleware,
  deleteUserController
);
userRoutes.patch(
  "/:id",
  ensureTokenValidateMiddleware,
  ensureUserExists,
  userValidateTokenId,
  ensureDataIsValid(updadeUserSchema),
  updateUserController
);
export default userRoutes;
