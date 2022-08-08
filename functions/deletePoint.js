const { PointOfInterest } = require('../schema/points-of-interest')

const { createSuccessResponse } = require('../handler')

module.exports.main = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const { id } = event.pathParameters

  try {
    await PointOfInterest.delete({ uuid: id })

    callback(null, createSuccessResponse(204, {}))
  } catch (err) {
    returnError(callback, err)
  }
}
