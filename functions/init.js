const { v4: uuid } = require('uuid')

const dataset = require('../dataset.json')
const { PointOfInterest } = require('../schema/points-of-interest')
const { returnError, createSuccessResponse } = require('../handler')

module.exports.main = async (event, _, callback) => {
  try {
    for (const item of dataset) {
      const id = uuid()
      await PointOfInterest.create({ uuid: id, ...item })
    }

    callback(null, createSuccessResponse(201, { count: dataset.length }))
  } catch (err) {
    returnError(callback, err)
  }
}
