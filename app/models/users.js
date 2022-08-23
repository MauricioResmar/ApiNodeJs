const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
         },
        avatar: {
            type: String,
            default: 'http://www.fff.com'
        },
        email: {
            type: String,
            unique: true,
             require: true
        }
    }
)
module.exports = mongoose.model('user', UserSchema)