const { PointOfInterest } = require('../schema/points-of-interest')

const { createSuccessResponse, createErrorResponse } = require('../handler')

module.exports.main = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const { id } = event.pathParameters

  try {
    const result = await PointOfInterest.get({ uuid: id })

    if (!result) {
      return callback(null, createErrorResponse(404, 'Point not found'))
    }

    callback(null, createSuccessResponse(200, result))
  } catch (err) {
    returnError(callback, err)
  }
}
