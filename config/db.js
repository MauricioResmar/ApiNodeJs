const mongoose = require('mongoose')

const DB_URI = `mongodb://127.0.0.1:27017/dbapi`

module.exports = () => {

    const connect = () => {
    mongoose.connect(
        DB_URI,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if(err) {
                console.log('DB: error !!' + err);
            } else {
                console.log('Conexion correcta')
            }
        }
    )
    }
    connect();
}
