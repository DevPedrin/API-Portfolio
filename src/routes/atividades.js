import express from "express"
import { prisma } from "../db/prisma.js"
import { checkApiKey } from "../middlewares/auth.js"

const router = express.Router()

// GET /atividades - público
router.get('/', async (req, res) => {
  try {
    const atividades = await prisma.atividades.findMany()
    res.json(atividades)
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: 'Erro ao buscar atividades' })
  }
})

// POST /atividades - protegido
router.post('/', checkApiKey, async (req, res) => {
  try {
    const { dta, nome_atividade, descricao, link } = req.body

    const nova = await prisma.atividades.create({
      data: {
        dta: new Date(dta),
        nome_atividade,
        descricao,
        link
      }
    })

    res.status(201).json(nova)
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: 'Erro ao criar atividade' })
  }
})

// DELETE /atividades/:id - protegido
router.delete('/:id', checkApiKey, async (req, res) => {
  try {
    const { id } = req.params

    await prisma.atividades.delete({
      where: { id: Number(id) }
    })

    res.status(204).send()
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: 'Erro ao deletar atividade' })
  }
})

export default router