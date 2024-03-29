import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { createLoginSchema } from "../schemas/loginschemas";

const loginRoutes: Router = Router();
loginRoutes.post(
  "",
  ensureDataIsValid(createLoginSchema),
  createLoginController
);

export default loginRoutes;
