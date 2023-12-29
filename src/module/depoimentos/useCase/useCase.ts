import { Depoimento, Prisma } from "@prisma/client";
import { DepoimentoRepository } from "../repository/repository";

type DepoimentoInput = Omit<Depoimento, "id">;

export class DepoimentoUseCase {
    static async createExecute({ foto, depoimento, nomePessoa }: DepoimentoInput) {
        const criaDepoimento = await DepoimentoRepository.post({ foto, depoimento, nomePessoa });

        return criaDepoimento;
    }

    static async getByIdExecute(id: string) {
        const getDepoimento = await DepoimentoRepository.getById(id);

        return getDepoimento;
    }

    static async loadHomePageExecute() {
        const loadHomePage: Depoimento[] = await DepoimentoRepository.loadHomePage();

        return loadHomePage;
    }

    static async putExecute(id: string, data: Prisma.DepoimentoUpdateInput) {
        const putDepoimento = await DepoimentoRepository.put(id, data);

        return putDepoimento;
    }

    static async deleteExecute(id: string) {
        const deleteDepoimento = await DepoimentoRepository.delete(id);

        return deleteDepoimento;
    }
}
