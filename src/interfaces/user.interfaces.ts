import { DeepPartial } from "typeorm";

import {
  userSchema,
  returnUserSchema,
  returnMultipleUserSchema,
 } from "../schemas/user.schemas";
import { z } from "zod";

type TUser = z.infer<typeof userSchema>;
type TUserReturn = z.infer<typeof returnUserSchema>;

type TUserReturnNotPassword = Omit<TUserReturn, "password">;

type TUsersReturnAll = z.infer<typeof returnMultipleUserSchema>;

type TUserUpdate = DeepPartial<TUser>;


export {
  TUser,
  TUserReturn,
  TUserReturnNotPassword,
  TUsersReturnAll,
  TUserUpdate,
};
