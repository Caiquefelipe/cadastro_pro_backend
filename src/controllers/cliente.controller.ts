import { Request, Response } from "express";
import ClienteService from "../services/cliente.service";
import {  ClienteDTO } from "../interfaces/Cliente";



const ClienteController = {
    criar: async (req: Request, res: Response) => {
        try {
            const dados: ClienteDTO = req.body
            const cliente = await ClienteService.criar(dados)   
            res.status(201).json(cliente)
        } catch(error: any) {
            res.status(400).json({error: error.message})
        }
    }
}

export default ClienteController