const express = require("express")
var morgan = require("morgan");

require('dotenv').config

const monopolyRoutes = require("./routes/monopoly")
const authRoutes = require('./routes/auth')

const app = express();
const PORT = process.env.PORT || 3000

// //Adding middleware
app.use(morgan("dev"))

//adding json parser to express app
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//start express server
app.listen(PORT, (error) => {
  try {
    console.debug(
        `
      Yep this is working 🍺
      App listen on port: ${PORT} 🍕
    `
    )
  } catch (error) {
    console.error(error)
  }
});



app.use("/monopoly", monopolyRoutes)
app.use("/auth", authRoutes)


//root endpoint
app.get("/home", (req, res) => {
  return res.json({
    message: "It worked fine",
  })
})

app.post("/home", (req, res) => {
  return res.json({
   data: req.body
  })
})
