import { ClienteDTO } from "../interfaces/Cliente";
import ClienteRepository from "../repositories/Cliente.repository";


const ClienteService = {
    criar: (data: ClienteDTO) => ClienteRepository.create(data),}

export default ClienteService