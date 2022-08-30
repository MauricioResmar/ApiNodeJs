const express = require('express')
const controller = require('../controllers/uploads')
const router = express.Router()


/*Haciendo uso del metodo post, invocamos el respectivo metodo upload en el controlador:
 */
const path='upload'

router.post(`/${path}`,
controller.upload,
controller.uploadFile
)

module.exports = router