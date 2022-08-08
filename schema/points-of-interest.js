const { dynamoose } = require('../config')

const PointSchema = new dynamoose.Schema(
  {
    uuid: {
      type: String,
      hashKey: true,
    },
    comune: String,
    provincia: String,
    regione: String,
    nome: String,
    macroTipologia: String,
    tipologia: String,
    scheda: String,
    idFeature: Number,
    doX: String,
    doY: String,
  },
  {
    timestamps: true,
  }
)

module.exports.PointOfInterest = dynamoose.model(
  process.env.DYNAMODB_TABLE_POINTS,
  PointSchema
)
