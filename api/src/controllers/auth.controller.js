const User = require('../models/auth.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')
const crypto = require('crypto')
const mailer = require('../modules/mailer')
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
            console.log(user);
            user.userPassword = undefined
            
            return res.send({ 
                user,
                token: generateToken({ id: user.id })
            })

            // const token = jwt.sign({ userEmail: user.userEmail, userId: user._id }, authConfig.secret, { expiresIn: "1h"})
            // res.status(200).json({
            //     token: token
            // });
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
    },
    authenticate: async (req, res) => {
        const { userEmail, userPassword } = req.body

        const user = await User.findOne({ userEmail }).select('+userPassword')
        console.log(user);
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

        // const token = jwt.sign({ userEmail: user.userEmail, id: user.id }, authConfig.secret, { expiresIn: "1h"})
        // res.status(200).json({
        //     token: token
        // });
        // console.log(token);
    },
    signup: async (req, res, next) => {

    },
    forgot: async (req, res) => {
        const { userEmail } = req.body;

        try {
            const user = await User.findOne({ userEmail })
            console.log(user);
            if (!user) {
                return res.status(400).send({ message: 'User not found' })
            }

            const token = crypto.randomBytes(20).toString('hex')
            console.log(token);
            const now = new Date()
            now.setDate(now.getHours() + 1)

            await User.findByIdAndUpdate(user.id, {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpires: now
                }
            })

            // console.log(token, now);

            mailer.sendMail({
                to: userEmail,
                from: 'anderson_cg12@hotmail.com',
                template: 'auth/forgot_password',
                context: { token }
            }, (err) => {
                if (err) {
                    return res.status(400).send({ message: 'Cannot send forgot password email' })
                }
            
                return res.send()
            })
        } catch (err) {
            res.status(400).send({ message: 'Error on forgot password, try again' })
        }
    },
    reset: async (req, res) => {
        const { userEmail, token, userPassword } = req.body
        console.log(userEmail, token, userPassword);
        
        try {
            const user = await User.findOne({ userEmail }).select('+passwordResetToken passwordResetExpires')
            console.log(user);
            if (token !== user.passwordResetToken) {
                return res.status(400).send({ message: 'Token invalid' })
            }
            
            const now = new Date()

            if (now > user.passwordResetExpires) {
                return res.status(400).send({ message: 'Token expired, generate a new one' })
            }

            user.userPassword = userPassword

            await user.save()

            res.send()
        } catch (error) {
            res.status(400).send({ message: 'Error on forgot password, try again' })
        }
    }
}
