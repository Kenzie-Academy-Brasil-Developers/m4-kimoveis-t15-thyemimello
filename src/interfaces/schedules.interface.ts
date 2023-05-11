import { z } from "zod";
import {
  createScheduleSchema,  
  returnScheduleSchema,
} from "../schemas/schedules.schemas";

type CreateSchedule = z.infer<typeof createScheduleSchema>;
type ReturnSchedule = z.infer<typeof returnScheduleSchema>;

export { CreateSchedule, ReturnSchedule };
