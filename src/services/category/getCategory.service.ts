import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { returnAllCategorySchema } from "../../schemas/category.schema";
import { ReturnCategoryAll } from "../../interfaces";

const getCategoryService = async (): Promise<ReturnCategoryAll> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categorysfind = await categoryRepository.find();

  const categoryList = returnAllCategorySchema.parse(categorysfind);

  return categoryList;
};

export default getCategoryService;
