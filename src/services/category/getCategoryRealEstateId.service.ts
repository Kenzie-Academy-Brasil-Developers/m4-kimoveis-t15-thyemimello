import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'



const getCategoryRealEstateIdService = async (idCategory: number) => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categoryfind = await categoryRepository.findOne({
        relations: {
          realEstate: true,
        },
        where: {
          id: idCategory,
        },
      });

    return categoryfind
}

export default getCategoryRealEstateIdService