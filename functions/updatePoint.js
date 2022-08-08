const { PointOfInterest } = require('../schema/points-of-interest')
const { PointSchemaValidator } = require('../validators/point-of-interest')

const {
  returnError,
  createErrorResponse,
  createSuccessResponse,
} = require('../handler')

module.exports.main = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const { id } = event.pathParameters

  const body = JSON.parse(event.body)
  const { error } = PointSchemaValidator.validate(body)

  if (error) {
    return callback(null, createErrorResponse(400, error))
  }

  try {
    const result = await PointOfInterest.update({ uuid: id }, body)

    callback(null, createSuccessResponse(200, result))
  } catch (err) {
    returnError(callback, err)
  }
}
