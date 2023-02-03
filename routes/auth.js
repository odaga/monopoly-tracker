const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

const saltRounds = 10

//login user 
router.post("/login", (req, res) => {
    try {
        return res.json({
            status: 200,
            data: req.body
        })
    } catch (error) {
        console.log(error)
    }
})

//Register new user
router.post("/register", async (req, res) => {
    const {email, password} = req.body
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        return res.status(201).json({
            status: 201,
            data: {
                email: email,
                password: password,
                encryptedPassword: hashedPassword
            }
        })

        
    }
    catch(err) {
        console.log(err)
    }
})



module.exports = router