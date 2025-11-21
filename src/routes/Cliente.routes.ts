import { Router } from "express";
import ClienteController from "../controllers/cliente.controller";



const router = Router();

router.post('/', ClienteController.criar)
router.get('/', ClienteController.listarTodos)
router.get('/:id', ClienteController.obterPorId)
router.put('/:id', ClienteController.atualizar)
router.delete('/:id', ClienteController.deletar)

export default router