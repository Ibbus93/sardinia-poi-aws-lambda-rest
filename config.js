const dynamoose = require('dynamoose')

dynamoose.aws.sdk.config.update({
  region: process.env.REGION || 'eu-west-1',
})

module.exports.dynamoose = dynamoose
