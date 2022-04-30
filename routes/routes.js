const express = require('express')
const router = express.Router()

const greet = (req,res) => {
    res.send('working. . .')
}

router.route('/').get(greet)


module.exports = routes