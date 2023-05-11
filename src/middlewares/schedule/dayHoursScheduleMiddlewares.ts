import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

const dayHoursScheduleMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const requestDate = req.body.date;
  const requestHours = req.body.hour;

  const date: Date = new Date(requestDate);
  const SegFri = date.getDay();

  const copyHour = requestHours;
  const hours = copyHour.slice(0, 2);

  if (SegFri === 0 || SegFri === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  if (hours < 8 || hours > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  return next();
};

export { dayHoursScheduleMiddlewares };
