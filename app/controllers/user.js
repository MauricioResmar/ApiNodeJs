const model = require('../models/users')

/*const options = {
    page: 1,
    limit: 10,
    collation: {
      locale: 'en',
    },
}*/

const options = {
    page: 1,
    limit: 3
    };

//Obtener Data de usuarios
exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
      res.send({
        items: docs
      })
    })
}
//Insertar Data de Usuarios
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