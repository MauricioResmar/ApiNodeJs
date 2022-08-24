const mongoose = require('mongoose')


/*El modelo de usuario nos permite generar el esquema de datos en formato 
similar a json y compatible con mongodb*/
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
         },
        avatar: {
            type: String,
            default: 'http://image.com'
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('user', UserSchema)