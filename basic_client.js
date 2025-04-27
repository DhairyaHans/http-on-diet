import {createConnection} from 'node:net'

const client = createConnection({
    host: "localhost",
    port: 8080
})

const message = "Hello World"
client.write(Buffer.from(message))
client.end()
