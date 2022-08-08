const { v4: uuid } = require('uuid')

const { PointOfInterest } = require('../schema/points-of-interest')
const { PointSchemaValidator } = require('../validators/point-of-interest')

const {
  returnError,
  createErrorResponse,
  createSuccessResponse,
} = require('../handler')

module.exports.main = async (event, _, callback) => {
  const body = JSON.parse(event.body)

  const { error } = PointSchemaValidator.validate(body)

  if (error) {
    return callback(null, createErrorResponse(400, error))
  }

  const id = uuid()

  try {
    const result = await PointOfInterest.create({ uuid: id, ...body })

    callback(null, createSuccessResponse(201, result))
  } catch (err) {
    returnError(callback, err)
  }
}
