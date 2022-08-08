const Joi = require('joi')

const schema = Joi.object({
  comune: Joi.string(),
  provincia: Joi.string(),
  regione: Joi.string(),
  nome: Joi.string(),
  macroTipologia: Joi.string(),
  tipologia: Joi.string(),
  scheda: Joi.string(),
  idFeature: Joi.number(),
  doX: Joi.string(),
  doY: Joi.string(),
})

module.exports.PointSchemaValidator = schema
