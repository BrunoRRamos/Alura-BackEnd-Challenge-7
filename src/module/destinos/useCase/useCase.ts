import { DestinoInput } from "../../../types";
import { DestinoRepository } from "../repository/repository";

export class DestinoUseCase {
    static async postExecute(destino: DestinoInput) {
        return await DestinoRepository.post(destino);
    }
    
    static async getAllExecute() {
        return await DestinoRepository.getAll();
    }

    static async getByIdExecute(id: string) {
        return await DestinoRepository.getById(id);
    }

    static async putExecute(id: string, data: DestinoInput) {
        return await DestinoRepository.put(id, data);
    }

    static async deleteExecute(id: string) {
        return await DestinoRepository.delete(id);
    }
}