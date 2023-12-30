import prisma from "../middleware/prisma";

export async function validaIdDestino(id: string): Promise<boolean> {
        let status = false;
        
        const entity = await prisma.destino.findUnique({
            where: {
                id: id,
            },
        });

        if (entity !== null) {
            status = true;
        }

        return status;
    }
export async function validaIdDepoimento(id: string): Promise<boolean> {
        let status = false;
        const entity = await prisma.depoimento.findUnique({
            where: {
                id: id
            }
        });

        if(entity !== null) {
            status = true;
        }
        
        return status;
    }