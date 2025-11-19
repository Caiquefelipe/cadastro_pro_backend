import { Router } from "express";
import ClienteController from "../controllers/cliente.controller";



const router = Router();

router.post('/clientes', ClienteController.criar)


export default router