const { PointOfInterest } = require('../schema/points-of-interest')

const { createSuccessResponse } = require('../handler')

module.exports.main = async (_, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const result = await PointOfInterest.scan().exec()

    callback(
      null,
      createSuccessResponse(200, { count: result.length, items: result })
    )
  } catch (err) {
    returnError(callback, err)
  }
}
