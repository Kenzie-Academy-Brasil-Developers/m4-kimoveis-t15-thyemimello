import { Request, Response } from "express";
import { createLoginService } from "../services/login/createLogin.service";

const createLoginController = async (
  req: Request,
  resp: Response
) => {

  const token = await createLoginService(req.body);

  return resp.json({token: token});
};

export { createLoginController };
