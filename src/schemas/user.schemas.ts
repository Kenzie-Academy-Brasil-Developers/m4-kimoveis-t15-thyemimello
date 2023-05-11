import { z } from "zod";

const userSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().optional().default(false),
});

const returnUserSchema = userSchema.extend({
  id: z.number(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  deletedAt: z.date().or(z.string()).nullable(),
});

const updadeUserSchema = z.object({
  name: z.string().max(45).optional(),
  email: z.string().email().max(45).optional(),
  password: z.string().max(120).optional(),
});

const returnUserNotPasswordSchema = returnUserSchema.omit({ password: true });
const returnMultipleUserSchema = z.array(returnUserNotPasswordSchema);

export {
  userSchema,
  returnUserSchema,
  updadeUserSchema,
  returnUserNotPasswordSchema,
  returnMultipleUserSchema,
  
};

