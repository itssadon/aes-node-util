const express = require('express')
const router = express.Router()
const objectController = require('../controllers/object.controller')
// const textController = require('../controllers/text.controller')

router
    .route('/object')
    .post(objectController.encryptObject)

// router
//     .route('/text')
//     .post(textController)

module.exports = router