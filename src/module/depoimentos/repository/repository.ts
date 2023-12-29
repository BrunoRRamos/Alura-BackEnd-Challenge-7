import { Depoimento, Prisma } from "@prisma/client";
import prisma from "../../../middleware/prisma";

type DepoimentoInput = Omit<Depoimento, "id">;

export class DepoimentoRepository {
  static async post(depoimento: DepoimentoInput): Promise<Depoimento> {
    const newDepoimento = await prisma.depoimento.create({
      data: {
        foto: depoimento.foto,
        depoimento: depoimento.depoimento,
        nomePessoa: depoimento.nomePessoa,
      },
    });

    return newDepoimento;
  }

  static async getById(id: string): Promise<Depoimento | null> {
    const depomiento = await prisma.depoimento.findUnique({
      where: {
        id: id,
      },
    });

    return depomiento;
  }

  static async put(id: string, data: Prisma.DepoimentoUpdateInput): Promise<Depoimento | null> {
    const updateDepoimento = await prisma.depoimento.update({
      where: {
        id,
      },
      data,
    });

    return updateDepoimento;
  }

  static async delete(id: string): Promise<Depoimento | null> {
    const deletedDepoimento = await prisma.depoimento.delete({
      where: {
        id: id
      }
    });

    return deletedDepoimento;
  }
}
