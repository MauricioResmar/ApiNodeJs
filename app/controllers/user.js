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
    res.send({ data })
}