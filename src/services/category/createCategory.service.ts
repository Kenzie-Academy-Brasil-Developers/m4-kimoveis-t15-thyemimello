import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { CreateCategory, returnCategory } from "../../interfaces/category.interfaces";
import { returnCategorySchema } from "../../schemas/category.schema";
import { AppError } from "../../errors";

const createCategoryService = async (categoryData: CreateCategory): Promise<returnCategory> => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
 
  const categoryExist = await categoryRepository.findOne({
    where: {
      name: categoryData.name
    }
  })
  if(categoryExist){
    throw new AppError(
      "Category already exists",
      409
    )
  }

  const category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const newCategory = returnCategorySchema.parse(category);

  return newCategory;
};

export default createCategoryService;
