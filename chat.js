const express = require('express')
const app = express()
const http = require('http').Server(app) //don't get it
const io = require('socket.io')(http) //dont get it

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('connection detected on server')
    socket.on('message', (msg) => {
        io.emit('message', msg)
        console.log(msg)
    })
})

http.listen(3000, () => {
    console.log('Listen on 3000...')
})
console.log(1)