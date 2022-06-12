const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    }, 

    userEmail: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    userPassword: {
        type: String,
        required: true,
        select: false
    },
    userDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.userPassword, 10)
    this.userPassword = hash
    
    next()
})

module.exports = mongoose.model('User', userSchema)