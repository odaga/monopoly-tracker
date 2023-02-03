const express = require('express')
const router = express.Router()

//add json parser to router
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

//Get players list
router.get('/players', (req,res) =>  {
    try {
        return res.json({
            status: 200,
            data: [
                {
                    name: "player Name",
                    score: "Player score"
                },
                {
                    name: "player Name 1",
                    score: "Player score 1"
                }
            ]
        })
    } catch (error) {
        console.log(error)
    }
})

//fetch players by id
router.get("/player/:id", (req, res) => {
    try {
        const playerId = req.params.id
        return res.status(200).json({
            status: 200,
            data: {
                id: playerId,
                name: "Player Name"
            }
        })
    } catch (error) {
        
    }
}), 


module.exports = router

