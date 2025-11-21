import { Request, Response } from "express";
import ClienteService from "../services/cliente.service";
import { ClienteDTO } from "../interfaces/Cliente";



const ClienteController = {
    criar: async (req: Request, res: Response) => {
        try {
            const dados: ClienteDTO = req.body
            const cliente = await ClienteService.criar(dados)
            res.status(201).json(cliente)
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    },


    listarTodos: async (req: Request, res: Response) => {
        try {
            const clientes = await ClienteService.listarTodos()
            res.status(200).json(clientes)
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    },

    obterPorId: async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const cliente = await ClienteService.obterPorId(id)
            res.status(200).json(cliente)
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    },

    atualizar: async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const dados: ClienteDTO = req.body
            const clienteAtualizado = await ClienteService.atualizar(id, dados)
            res.status(200).json(clienteAtualizado)
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    },

    deletar: async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            await ClienteService.deletar(id)
            res.status(204).send()
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }
}

export default ClienteController