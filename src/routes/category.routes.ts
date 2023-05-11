import { Router } from "express";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { createCategorySchema } from "../schemas/category.schema";
import {
  createCategoryController,
  getCategoryController,
  getCategoryRealIdController,
} from "../controllers/category.controller";
import ensureNoAdminMiddleware from "../middlewares/ensureNoAdmin.middleware";
import { ensureTokenValidateMiddleware } from "../middlewares/userTokenValidate";
import { categoryNotExistiMiddleware } from "../middlewares/categorys/categoryNotExistiMiddleware";

const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  ensureTokenValidateMiddleware,
  ensureNoAdminMiddleware,
  ensureDataIsValid(createCategorySchema),
  createCategoryController
);
categoryRouter.get("", getCategoryController);
categoryRouter.get(
  "/:id/realEstate",
  categoryNotExistiMiddleware,
  getCategoryRealIdController
);

export { categoryRouter };
