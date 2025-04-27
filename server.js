import { createServer } from 'node:net'

// Socket - Whenever someone connects to the server, this function will be called
// Socket is the connection to the client/server
const server = createServer(socket => {
    console.log("TCP socker connection Opened...")
    socket.on("data", data =>{
        console.log(`Recv ${data.toString()}`)
    })
    socket.on("end", () => {
        console.log("TCP socket connection Closed...")
    })
    socket.on("error", err => {
        console.error("TCP socket connection Error:", err.message)
        
    })
})

server.listen(8080)