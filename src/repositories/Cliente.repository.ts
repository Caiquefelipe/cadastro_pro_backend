import { Prisma } from "@prisma/client";
import { ClienteDTO } from "../interfaces/Cliente";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



const ClienteRepository = {
    create: (data: ClienteDTO) => prisma.cliente.create({data}),

}

export default ClienteRepository