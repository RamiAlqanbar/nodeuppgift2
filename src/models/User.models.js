import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = Schema({
    username: {
        type: String,
        unique: true,
        allowNull: false,
        required: true,
        lowercase: true,
        minlenght: [5,'username must be longer than 5 characters'],
        maxlength: [20, 'username is to long']
    },
    password: {
        type: String,
        allowNull: false,
        required: true
    }
})

const UserModel = mongoose.model('user', userSchema)
export default UserModel
