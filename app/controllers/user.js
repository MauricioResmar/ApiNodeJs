const model = require('../models/users')

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
      res.send({
        docs
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