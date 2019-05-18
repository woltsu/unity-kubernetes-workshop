// Imports
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = require('express')()

// Constants
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Controllers
app.get('/', (req, res) => {
  return res.status(200).send('Hello, world!')
})

// Create server
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }`)
})
