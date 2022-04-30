const express = require('express')
const app = express()
const routes = require('./routes/routes')


app.use(express.json())
app.get("/hello", (req, res) => {
    res.send('Hello World')
})

app.use('/api/v1/greet',routes)

const port = 3000

app.listen(port,console.log('starting my first ndoe project...'))