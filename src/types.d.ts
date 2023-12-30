import { Depoimento, Destino } from "@prisma/client";

declare type DepoimentoInput = Omit<Depoimento, "id">;
declare type DestinoInput = Omit<Destino, "id">;
