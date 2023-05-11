import { Request, Response } from "express";

import { createRealEstateService} from "../services/realEstate/createRealEstate.service";
import { RealEstateRequest } from "../interfaces";
import { getRealEstatesServices } from "../services/realEstate/getEstaate.service";


const createRealEstateController = async (req: Request, res: Response) => {
  const realData: RealEstateRequest = req.body;

  const newReal = await createRealEstateService(realData);

  return res.status(201).json(newReal);
};

const listRealController = async (req: Request, res: Response) => {

  const realEstatesAll = await getRealEstatesServices()

  return res.json(realEstatesAll)
}

export { createRealEstateController, listRealController};
