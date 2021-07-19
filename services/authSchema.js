const Joi = require('joi');
//DEFINE O PADRAO DOS DADOS
const CepRegex = /(^[\d]{5})+\-([\d]{3})$/
const schema = Joi.object({
  nome: Joi.string()
    .alphanum()
    .min(3)
    .max(120)
    .required(),

  telNumero: Joi.number().integer().optional(),
  celNumero: Joi.number().required(),
  endereço: Joi.string().pattern(CepRegex),
  especialidades: Joi.string().optional()
})

module.exports = schema