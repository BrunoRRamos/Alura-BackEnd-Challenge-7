import { Request, Response } from "express";
import { DestinoInput } from "../../../types";
import { DestinoUseCase } from "../useCase/useCase";
import { httpCodes } from "../../../utils/httpCodes";

export class DestinoController {
    static async postHandle(req: Request, res: Response):Promise<Response> {
        const { foto, nome, preco }: DestinoInput = req.body;
        const newDestino = await DestinoUseCase.postExecute({ foto, nome, preco });

        return res.status(httpCodes.CREATED).json(newDestino);
    }

    static async getAllHandle(req: Request, res: Response):Promise<Response> {
        const allDestino = await DestinoUseCase.getAllExecute();

        return res.status(httpCodes.OK).json(allDestino);
    }

    static async getByIdHandle(req: Request, res: Response):Promise<Response> {
        const { id } = req.params;
        const destino = await DestinoUseCase.getByIdExecute(id);

        return res.status(httpCodes.OK).json(destino);
    }

    static async putHandle(req: Request, res: Response):Promise<Response> {
        const { id } = req.params;
        const data = req.body;
        const updatedDestino = await DestinoUseCase.putExecute(id, data);

        return res.status(httpCodes.OK).json(updatedDestino);
    }

    static async deleteHandle(req: Request, res: Response):Promise<Response> {
        const { id } = req.params;
        const deletedDestino = await DestinoUseCase.deleteExecute(id);

        return res.status(httpCodes.NO_CONTENT).json(deletedDestino);
    }
}