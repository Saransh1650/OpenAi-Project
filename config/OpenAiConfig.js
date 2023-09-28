const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey: "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",
})

const openai = new OpenAIApi(configuration)

module.exports = openai