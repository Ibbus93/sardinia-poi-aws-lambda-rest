'use strict'

/**
 * Helper function
 * @param {*} statusCode
 * @param {*} message
 * @returns
 */
const createSuccessResponse = (statusCode, body) => ({
  statusCode: statusCode || 200,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
})

/**
 * Helper function
 * @param {*} statusCode
 * @param {*} message
 * @returns
 */
const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    error: message || 'An Error occurred.',
  }),
})
/**
 *
 * @param {*} error Error message
 */
const returnError = (callback, error) => {
  console.log(error)
  if (error.name) {
    const message = `Invalid ${error.path}: ${error.value}`
    callback(null, createErrorResponse(400, `Error:: ${message}`))
  } else {
    callback(
      null,
      createErrorResponse(error.statusCode || 500, `Error:: ${error.name}`)
    )
  }
}

module.exports = {
  returnError,
  createErrorResponse,
  createSuccessResponse,
}
