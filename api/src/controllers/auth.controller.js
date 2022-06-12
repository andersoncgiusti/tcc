const User = require('../models/auth.model')
const ObjectID = require('mongodb').ObjectID
const bcrypt = require('bcryptjs')

module.exports = { 
    register: async (req, res) => {  
        const { userEmail } = req.body

        try {
            if (await User.findOne({ userEmail })) {
                return res.status(400).send({ message: "User already exists" })
            }

            // user.password = undefined

            bcrypt.hash(req.body.userPassword, 10)
            .then(hash)

            const user = await User.create(req.body)
            return res.send({ user })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
    }, 
    authenticate: async (req, res) => {
        const { userEmail, userPassword } = req.body

        const user = await User.findOne({ userEmail }).select('+password')

        if (!user) {
            return res.status(400).send({ message: 'User not found' })
        }
    }
}
