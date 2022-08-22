const express = require('express')

const app = express()

const port = 3001

const userRouters = require('./app/routes/user')
const itemsRouters = require('./app/routes/items')


/*El app.get va a tener dos argumentos request and response, estos dos argumentos, corresponden a lo
datos que están entrando como request del lado cliente, los cuales pueden ser paramentros, cabeceras,
header o demás y el res va a ser el argumento mediante el cual nosotros vamos 
a responder un codigo, 200, 201, 404 etc. En este caso simplemente le vamos a decir que va a responder
enviando la data Hola mundo.*/

/*
app.get('/', (req, res) => {
    res.send({
        data:'Hola mundo'
    })
})*/

app.use(userRouters)
app.use(itemsRouters)

/*Ahora hay que decirle al server que se levanten y que comience
 a correr la aplicacion por el puerto
3000 */
app.listen(port,() => {
    console.log('La Aplicacion está en linea!');
})

/*Para iniciar nuestra aplicacion, haciendo uso de start, hay que modificar en el archivo
package.json como se muestra a continuacion:

*/