const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const router = require('./routes')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())

app.use(router)
app.listen(3333, _ => console.log('server is active at 3000 port'))
