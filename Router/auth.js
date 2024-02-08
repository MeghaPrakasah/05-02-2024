const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../model/user')


//First Question

router.post('/registeruser', async (req, res) => {
    try {
        const { username, email ,password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            username: username,
            email:email,
            password: hashedPassword
        })
        await user.save()
        res.status(200).json({ message: "Registered Successfully" })
        } 
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Registration failed" })
    }
})


router.post('/user', async (req, res)=>{
    try {
        const { username } = req.body
        const user = await User.findOne({ username })
            if (!user) {
                return res.status(401).json({ error: 'No user added' })
            }
        res.status(200).json({ Message: 'User post route accessed' }) 
        } 
    catch (error) {
        console.log(error)
    }
})


module.exports = router