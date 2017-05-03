// Create app
const app = require('express')()

// Set port from cli or default
const PORT = process.env.port || 3000

// Create middleware
const requestLogger = (req, res, next) => {
    console.log(`${req.method.toUpperCase()}: ${req.originalUrl}`)
    next()
}

// Start the server
app.listen(PORT, () => console.log(`Hello world is listening on port ${PORT}`))

// Apply the middleware to all requests
app.use(requestLogger)

// Respond to requests on root
app.get('/', (req, res) => {
    res.send('Hello world!')
})
