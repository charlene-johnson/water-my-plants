const express = require("express")
const cors = require("cors")
const plantsRouter = require("./plants/plants-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/api/plants", plantsRouter)
server.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Plant API!",
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong with retrieving your plants, try again later",
    })
})

module.exports = server