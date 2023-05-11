import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstate.enitity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (real_estate) => real_estate.category)
  realEstate: RealEstate[];
}

export { Category };
