import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities/schedule.entity";
import { CreateSchedule } from "../../interfaces/schedules.interface";
import { RealEstate, User } from "../../entities";
import { AppError } from "../../errors";

const createScheduleService = async (
  scheduleData: CreateSchedule,
  idUser: number
) => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
 

  const existSchedule = await scheduleRepository
    .createQueryBuilder("schedule").innerJoinAndSelect("schedule.realEstate", "realEstate")
    .where("realEstate.id = :realEstateId", {
      realEstateId: scheduleData.realEstateId})
    .andWhere("schedule.date = :date", { date: scheduleData.date })
    .andWhere("schedule.hour = :hour", { hour: scheduleData.hour })
    .getOne();

  if (existSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const userExistSchedule = await scheduleRepository
  .createQueryBuilder("schedule")
  .innerJoinAndSelect("schedule.user", "user")
  .where("user.id = :id", { id:idUser })
  .andWhere("schedule.date = :date", { date: scheduleData.date })
  .andWhere("schedule.hour = :hour", { hour: scheduleData.hour })
  .getOne();


if (userExistSchedule) {
  throw new AppError(
    "User schedule to this real estate at this date and time already exists",
    409
  );
}

  const findRealEstate = await realEstateRepository.findOne({
    where: {
      id: scheduleData.realEstateId!,
    },
  });

  const findUser = await userRepository.findOneBy({
    id: idUser,
  });

  const newSchedules = scheduleRepository.create({
    ...scheduleData,
    realEstate: findRealEstate!,
    user: findUser!,
  });

  await scheduleRepository.save(newSchedules);

  return newSchedules;
};

export default createScheduleService;
