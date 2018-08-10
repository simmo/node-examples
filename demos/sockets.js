const app = require('express')()
const PORT = process.env.port || 3000
const server = require('http').Server(app)
const io = require('socket.io')(server)

// Start the server
server.listen(PORT, () =>
  console.log(`Hello world is listening on port ${PORT}`)
)

// Respond to requests on root
app.get('/', (req, res) => {
  res.send(`
    <button type="button" id="sendCta">Send a message</button>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io.connect('http://localhost:${PORT}');
      socket.on('message', (data) => console.log('Server:', data));

      document.querySelector('#sendCta').addEventListener('click', () => {
        socket.emit('message', { body: 'Hello from client' });
      }, false);
    </script>
  `)
})

// Listen for connections
io.on('connection', socket => {
  // When a message event is receieved
  socket.on('message', data => {
    // Log what we got
    console.log('From client:', data)

    // Send a message back
    socket.emit('message', { body: 'Hello from server' })
  })
})
