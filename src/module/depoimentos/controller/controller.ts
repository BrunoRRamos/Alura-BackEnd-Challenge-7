import { Depoimento } from "@prisma/client";
import { Request, Response } from "express";
import { DepoimentoUseCase } from "../useCase/useCase";
import { httpCodes } from "../../../utils/httpCodes";

type DepoimentoInput = Omit<Depoimento, "id">;
export class DepoimentoController {

  static async postHandle(req: Request, res: Response): Promise<Response> {
    const { foto, depoimento, nomePessoa }: DepoimentoInput = req.body;
    const newDepoimento = await DepoimentoUseCase.createExecute({ foto, depoimento, nomePessoa });

    return res.status(httpCodes.CREATED).json(newDepoimento);
  }

  static async getByIdHandle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const getDepoimento = await DepoimentoUseCase.getByIdExecute(id);

    return res.status(httpCodes.OK).send(getDepoimento);
  }

  static async putHandle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;
    const updatedDepoimento = await DepoimentoUseCase.putExecute(id, data);

    return res.status(httpCodes.OK).json(updatedDepoimento);
  }

  static async deleteHandle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deletedDepoimento = await DepoimentoUseCase.deleteExecute(id);

    return res.status(httpCodes.NO_CONTENT).json(deletedDepoimento);
  }
}