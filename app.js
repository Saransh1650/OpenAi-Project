const { generateData, generateImage } = require('./controllers/openaiControllers')
const express = require('express')

//express app
const app = express()
app.listen(4000, () => console.log('listening to port 4000'))

app.use(express.json())
app.use(express.static('public'))

//routes
app.post('/openai/meta', generateData)
app.post('/openai/image', generateImage)

