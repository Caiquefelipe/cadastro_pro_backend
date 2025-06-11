const express = require("express");
const cors = require("cors");
const { parse } = require("date-fns");
const dotenv = require("dotenv");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.post("/clientes", async (req, res) => {
  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        bairro: req.body.bairro,
        endereco: req.body.endereco,
        numeroEndereco: req.body.numeroEndereco,
        telefone: req.body.telefone,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        descricao: req.body.descricao,
      },
    });
    console.log(novoCliente);

    res.status(201).json(novoCliente);
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    res
      .status(400)
      .json({ error: "Erro ao criar cliente", detalhe: error.message });
  }
});

app.delete("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const cliente = await prisma.cliente.delete({
      where: { id },
    });

    res.status(200).json(cliente);
  } catch (error) {
    console.log("Erro ao deletar cliente", error);
  }
});

app.get("/clientes", async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.status(200).json({ clientes });
});
app.get("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { id },
    });

    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    res.status(200).json(cliente);
  } catch (error) {
    console.error("Erro ao buscar cliente por ID:", error);
    res
      .status(500)
      .json({ error: "Erro ao buscar cliente", detalhe: error.message });
  }
});

app.put("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);
  console.log("ID recebido para atualização:", id);
  try {
    const novoCliente = await prisma.cliente.update({
      where: {
        id: id,
      },
      data: {
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        bairro: req.body.bairro,
        endereco: req.body.endereco,
        numeroEndereco: req.body.numeroEndereco,
        telefone: req.body.telefone,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        descricao: req.body.descricao,
      },
    });

    res.status(200).json(novoCliente);
  } catch (error) {
    console.error("Erro ao editar cliente:", error);
    res
      .status(400)
      .json({ error: "Erro ao editar cliente", detalhe: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
