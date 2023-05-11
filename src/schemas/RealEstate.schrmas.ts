import { z } from "zod";
import { returnCategorySchema } from "./category.schema";


const createAddressSchema = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional().nullable(),
  city: z.string().max(20),
  state: z.string().max(2),
});


const returnAdrressSchema = createAddressSchema.extend({
  id: z.number(),
});

const realEstateSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: createAddressSchema,
  categoryId: z.number().optional(),
});

const returnRealSchema = realEstateSchema.extend({
  id: z.number(),
  sold: z.boolean().default(false),
  address: returnAdrressSchema.required(),
  createdAt: z.string(),
  updatedAt: z.string(),
  category: returnCategorySchema,
});

const returntwoRealSchema = realEstateSchema.extend({
  id: z.number(),
  sold: z.boolean().default(false),
  address: returnAdrressSchema.required(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

const returnMultRealSchema =  returntwoRealSchema.array()


export {
  realEstateSchema,
  returnRealSchema,
  createAddressSchema,
  returnAdrressSchema,
  returntwoRealSchema,
  returnMultRealSchema,
};
