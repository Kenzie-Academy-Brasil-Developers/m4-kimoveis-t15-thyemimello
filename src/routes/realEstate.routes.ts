import { Router } from "express";
import {createRealEstateController, listRealController } from "../controllers/realEstate.controllers";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { realEstateSchema } from "../schemas/RealEstate.schrmas";
import addressMiddleware from "../middlewares/address/address.middleware";
import ensureNoAdminMiddleware from "../middlewares/ensureNoAdmin.middleware";
import { ensureTokenValidateMiddleware } from "../middlewares/userTokenValidate";

const realEstateRoute: Router = Router();

realEstateRoute.post(
  "",
  ensureTokenValidateMiddleware,
  ensureNoAdminMiddleware,
  ensureDataIsValid(realEstateSchema),
  addressMiddleware,
  createRealEstateController
);

realEstateRoute.get("", listRealController);

export default realEstateRoute;
