import { ClienteDTO } from "../interfaces/Cliente";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



const ClienteRepository = {
    create: (data: ClienteDTO) => prisma.cliente.create({ data }),
    listAll: () => prisma.cliente.findMany(),
    getById: (id: number) => {
        return prisma.cliente.findUnique({
            where: { id },
        });
    },
    update: (id: number, data: ClienteDTO) => {
        return prisma.cliente.update({
            where: { id },
            data,
        });
    },
    delete: (id: number) => {
        return prisma.cliente.delete({
            where: { id },
        });
    }


}

export default ClienteRepository