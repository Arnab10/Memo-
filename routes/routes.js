const express = require('express')
const router = express.Router()
const {test,greet,save} = require('../controller/TaskController')


router.route('/test').get(test)
router.route('/greet').get(greet)
router.route('/save').post(save)


module.exports = router