import { z } from "zod";

const createCategorySchema = z.object({
  name: z.string().max(45),
});

const returnCategorySchema = z.object({
  id: z.number(),
  name: z.string().max(45),
 
});


const returnAllCategorySchema = z.array(returnCategorySchema);

export {
  createCategorySchema,
  returnCategorySchema,
  returnAllCategorySchema,
};
