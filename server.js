const eurekaHelper = require('./eureka-helper');

const express = require('express')
const connectDB = require('./config/database')
const { errorHandler } = require('./middleware/error-handler')

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express()

// Connection Database
connectDB()

// set port 
const port = process.env.PORT || 3000
// parse request of content-type - application/json
app.use(express.json())
//define a root route
app.get("/",(req,res)=>{
    res.send("Welcome Everybody")
})
// router
app.use("/node", require("./routes/remboursement-routes"))
// main listen
app.listen(port,()=>{
    console.log("Server started Port " + port)
})

// Error
app.use(errorHandler)

//Add swagger
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument))

eurekaHelper.registerWithEureka('api-assurance', port);

module.exports = app