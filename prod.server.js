let express = require('express')
let config = require('./config/index.js')

let port = process.env.PORT || 8080

let app = express()

let router = express.Router()

router.get('/', (req, res, next) => {
	req.url = '/index.html'
	next()
})

app.use(router)

app.use(express.static('./dist'))

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('> Listening at http://localhost:' + port +'\n')
})