import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./user.entity";
import { RealEstate } from "./realEstate.enitity";

@Entity("schedules_users_properites")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
 
}

export { Schedule };
