const { default: mongoose } = require('mongoose');
const model = require('../models/users')

/*const options = {
    page: 1,
    limit: 10,
    collation: {
      locale: 'en',
    },
}*/
/*options nos permite setear los parametros necesarios para el paginado de la información
según el plugin referente a mongoose-paginate-v2*/
const options = {
    page: 1,
    limit: 3 
    };

/*A continuación, vamos a convertir el tipo de dato String id, enviado por la url mediante metodo put
a tipo de dato ObjectId requerido para poder realizar nuestro put sobre la data en la bd correspondiente
al id:*/

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
} 

//Obtener Data de usuarios, mediante metodo get
exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
      res.send({
        items: docs
      })
    })
}
//Insertar Data de Usuarios mediante metodo post
exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
      if(err){
        console.log('Error', err);
        res.send({ error: 'Error' }, 422)
      }else{
        res.send({ data: docs })
      }
  })
}
//Actualizar Data mediante metodo put / update
exports.updateSingle = (req, res) => {
//obtenemos el parámeto .id desde \routes\user.js mediante método PUT
     // const id = req.param.id para resumir codigo usamos la siguiente linea que traduce igual
     const {id} = req.params
     const body = req.body
     model.updateOne(
      //{ _id: parseId(req.params.id) }, También funciona:
      { _id: parseId(id) },
     body,
     (err, docs) => {
      // Lo use para observar que devolvia en caso de error: 
      //console.log(err);
        res.send({
          items: docs
        })
     })
}

//Borrar Data mediante metodo DELETE 
exports.deleteSingle = (req, res) => {
//obtenemos el parámeto .id desde \routes\user.js mediante método PUT
     // const id = req.param.id para resumir codigo usamos la siguiente linea que traduce igual
     const {id} = req.params
     model.deleteOne(
      //{ _id: parseId(req.params.id) }, También funciona:
        { _id: parseId(id) },
     
     (err, docs) => {
          res.send({
          items: docs
        })
     })
}