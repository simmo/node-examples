// Create app
const app = require('express')()

// Set port from cli or default
const PORT = process.env.port || 3000

// Start the server
app.listen(PORT, () => console.log(`Hello world is listening on port ${PORT}`))

// Respond to requests on root
app.get('/', (req, res) => {
    res.send('Hello world!')
})
