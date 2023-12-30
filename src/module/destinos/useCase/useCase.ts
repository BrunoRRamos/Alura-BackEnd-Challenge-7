import { DestinoInput } from "../../../types";
import { DestinoRepository } from "../repository/repository";

export class DestinoUseCase {
    static async postExecute(destino: DestinoInput) {
        return DestinoRepository.post(destino);
    }
    
    static async getAllExecute() {
        return DestinoRepository.getAll();
    }

    static async getByIdExecute(id: string) {
        return DestinoRepository.getById(id);
    }

    static async putExecute(id: string, data: DestinoInput) {
        return DestinoRepository.put(id, data);
    }

    static async deleteExecute(id: string) {
        return DestinoRepository.delete(id);
    }
}