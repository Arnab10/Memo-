const express = require('express')
const app = express()
const router = require('./routes/routes')

app.use('/api/v1/',router)
app.use(express.json())

const port = 3000

app.listen(port,console.log('starting my first ndoe project...'))