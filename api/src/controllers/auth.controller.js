const User = require('../models/auth.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')
const ObjectID = require('mongodb').ObjectID

 
generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

module.exports = { 
    register: async (req, res) => {  
        const { userEmail } = req.body

        try {
            if (await User.findOne({ userEmail })) {
                return res.status(400).send({ message: "User already exists" })
            }
                
            const user = await User.create(req.body)

            user.userPassword = undefined
            
            return res.send({ 
                user,
                token: generateToken({ id: user.id })
            })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
    },
    authenticate: async (req, res) => {
        const { userEmail, userPassword } = req.body

        const user = await User.findOne({ userEmail }).select('+userPassword')

        if (!user) {
            return res.status(400).send({ message: 'User not found' })
        }

        if (!await bcrypt.compare(userPassword, user.userPassword)) {
            return res.status(400).send({ message: 'Invalid password' })
        }

        user.userPassword = undefined

        res.send({ 
            user, 
            token: generateToken({ id: user.id })
        })
    }
}
