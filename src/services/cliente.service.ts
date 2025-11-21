import { ClienteDTO } from "../interfaces/Cliente";
import ClienteRepository from "../repositories/Cliente.repository";


const ClienteService = {
    criar: (data: ClienteDTO) => ClienteRepository.create(data),
    listarTodos: () => ClienteRepository.listAll(),
    obterPorId: (id: number) => ClienteRepository.getById(id),
    atualizar: (id: number, data: ClienteDTO) => ClienteRepository.update(id, data),
    deletar: (id: number) => ClienteRepository.delete(id),
}

export default ClienteService