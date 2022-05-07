const express = require('express')
const router = express.Router()
const {test,greet,save,get} = require('../controller/TaskController')
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

router.route('/test').get(test)
router.route('/greet').get(greet)
router.route('/save').post(jsonParser,save)
router.route('/get').get(jsonParser,get)


module.exports = router