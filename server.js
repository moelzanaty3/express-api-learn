const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const PORT = 3000
// handle cors
app.use(cors())
// handle body parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('website'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is Running at PORT: ${PORT}`)
})
