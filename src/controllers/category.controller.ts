import { Request, Response } from 'express'
import getCategoryService from '../services/category/getCategory.service'
import getCategoryRealEstateIdService from '../services/category/getCategoryRealEstateId.service'
import createCategoryService from '../services/category/createCategory.service'


const createCategoryController = async (req: Request, res: Response) => {
    
    const categoryData = req.body

    const newCategory = await createCategoryService(categoryData)
    
    return res.status(201).json(newCategory)

}

const getCategoryController = async (req: Request, res: Response) => {

    const getlistCategory = await getCategoryService()

    return res.json(getlistCategory)

}

const getCategoryRealIdController = async (req: Request, res: Response) => {

    const categoryId = parseInt(req.params.id)

    const listRealEstateByCategory = await getCategoryRealEstateIdService(categoryId)

    return res.status(200).json(listRealEstateByCategory)
}

export {
    createCategoryController,
    getCategoryController,
    getCategoryRealIdController
}