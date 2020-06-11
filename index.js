const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4545

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

/**
 * CORS Middleware
 */
app.use(cors())

/**
 * Routes
 */
const encryptionRouter = require('./routes/encryption.routes')
const decryptionRouter = require('./routes/decryption.routes')

/**
 * Endpoints
 */
app.use('/encrypt', encryptionRouter)
app.use('/decrypt', decryptionRouter)

// Redirect all other invalid request
app.get('*', (req, res) => {
    return res.send({
        "message": "Invalid request."
    })
})

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port)
})

// Uncaught error catching
process.on('uncaughtException', function (err) {
    console.error('uncaughtException: ' + err)
    process.exit(1)
})