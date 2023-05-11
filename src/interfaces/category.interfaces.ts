import { z } from "zod";
import {
  createCategorySchema, 
  returnAllCategorySchema,
  returnCategorySchema,
} from "../schemas/category.schema";

type CreateCategory = z.infer<typeof createCategorySchema>;
type returnCategory = z.infer<typeof returnCategorySchema>;

type ReturnCategoryAll = z.infer<typeof returnAllCategorySchema>;

export { returnCategory, CreateCategory, ReturnCategoryAll};
