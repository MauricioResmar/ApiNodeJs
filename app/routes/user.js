const express = require('express')
/*Puesto que se están exportando los metodos desde /controller/user, declaramos 
la variable controller para invocarlos y encapsularlos en ella*/
const controller = require('../controllers/user')

/*Hacemos uso del metodo router perteneciente a express, para obtener las rutas o Urls
necesarias */
const router = express.Router()
const path = 'user'
/*
* Ruta: /user GET 
Tenga en cuenta que los literales de plantilla están encerrados 
por el carácter de acento grave (` `) en lugar de comillas simples o dobles. 
La ${expresión} es un marcador de posición y puede incluir cualquier expresión, 
que se evaluará e insertará en el literal de la plantilla.
*/
router.get(
    `/${path}`,
    controller.getData
)

module.exports = router