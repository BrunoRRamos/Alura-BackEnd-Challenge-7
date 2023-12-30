import { Destino, Prisma } from "@prisma/client";
import prisma from "../../../middleware/prisma";
import { DestinoInput } from "../../../types";

export class DestinoRepository {

    static async post(destino: DestinoInput): Promise<Destino> {
        const newDepoimento = await prisma.destino.create({
            data: {
                foto: destino.foto,
                nome: destino.nome,
                preco: destino.preco,
            },
        });

        return newDepoimento;
    }

    static async getAll(): Promise<Destino[]> {
        const allDestinos = await prisma.destino.findMany();

        return allDestinos;
    }

    static async getById(id: string): Promise<Destino | null> {
        const destino = await prisma.destino.findUnique({
            where: {
                id: id,
            },
        });

        return destino;
    }

    static async put(id: string, data: Prisma.DestinoUpdateInput): Promise<Destino | null> {
        const updatedDestino = await prisma.destino.update({
            where: {
                id,
            },
            data,
        });

        return updatedDestino;
    }

    static async delete(id: string): Promise<Destino | null> {
        const deletedDestino =  await prisma.destino.delete({
            where: {
                id,
            },
        });

        return deletedDestino;
    }
}