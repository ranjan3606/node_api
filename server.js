const express = require("express")
const mongoose = require("mongoose")
const app = express()
require('dotenv').config()

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const PORT = process.env.PORT || 3000

//connect mongoose 

mongoose.connect(process.env.MongoUrl,
{useNewUrlParser:true}
)
.then(() => {
    console.log('Database is connected')
}).catch(err => {
    console.log('Database is not connect', err)
})



const router = express.Router()

// router.get('/', function (req, res) {
//     res.json({ message: "welcome to nodejs" })
// })

// app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Started the Server at port ${PORT}`)
})

