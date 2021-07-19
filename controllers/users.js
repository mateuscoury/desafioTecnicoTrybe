const user = require("express").Router()
const schema = require('../services/authSchema')
const { Usuario } = require('../models/index')
const getAdress = require("../services/apis")




user.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.findAll()
    return res.status(200).json({ usuarios })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})

user.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id)
    return res.status(200).json(usuario)
  } catch (error) {
    return res.status(500).json(error.message)
  }
})


user.post("/create", async (req, res) => {
  try {
    const { nome, telNumero, celNumero, endereço, especialidades } = req.body;
    const auth = await schema.validateAsync({ nome, telNumero, celNumero, endereço, especialidades })
    if (auth.error) return res.status(auth.error.status).json(auth.error.message)
    const data = await getAdress(endereço)
    const usuario = await Usuario.create({ nome, telNumero, celNumero, endereço: data, especialidades })
    return res.status(201).json(usuario)
  } catch (error) {
    return res.status(500).json(error.message)
  }
})

user.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { nome, telNumero, celNumero, endereço, especialidades } = req.body;
    await Usuario.update({ nome, telNumero, celNumero, endereço, especialidades }, { where: { id } })
    return res.status(200).json({ message: "atualizacao efetuada" })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})

user.delete("/del/:id", async (req, res) => {
  try {
    const { id } = req.params
    await Usuario.destroy({ where: { id } })
    return res.status(200).json({ message: "usuario deletado com sucesso" })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})


module.exports = user