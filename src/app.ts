import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/Cliente.routes';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/clientes", router);

export default app;