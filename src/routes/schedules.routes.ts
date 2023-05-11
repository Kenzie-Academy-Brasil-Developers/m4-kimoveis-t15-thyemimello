import { Router } from "express";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createScheduleSchema } from "../schemas/schedules.schemas";
import {
  createSchedulesController,
  listScheduleController,
} from "../controllers/schedules.controllers";
import { dayHoursScheduleMiddlewares } from "../middlewares/schedule/dayHoursScheduleMiddlewares";
import { scheduleNotExistiMiddleware } from "../middlewares/schedule/scheduleNotExist";
import ensureNoAdminMiddleware from "../middlewares/ensureNoAdmin.middleware";
import { tokenScheduleMiddlewares } from "../middlewares/schedule/scheduleTokenMiddlewares";
import { ensureTokenValidateMiddleware } from "../middlewares/userTokenValidate";

const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  ensureTokenValidateMiddleware,
  ensureDataIsValidMiddleware(createScheduleSchema),
  scheduleNotExistiMiddleware,
  dayHoursScheduleMiddlewares,
  createSchedulesController
);
schedulesRouter.get(
  "/realEstate/:id",
  ensureTokenValidateMiddleware,
  ensureNoAdminMiddleware,
  tokenScheduleMiddlewares,
  listScheduleController
);

export default schedulesRouter;
