import { createConnection } from "node:net";

class MyProtocol {
    constructor() {
        this.client = createConnection({
            host: "localhost",
            port: 8080
        });
        this.ready = false;

        // fires when connected
        this.client.on('connect', () => {
            console.log("Connected to the Server...");
            this.ready = true;
        });

        // fires when server ends the connection
        this.client.on('end', () => {
            console.log("Server ended the connection. Retry connection 3-4 times.");
            this.ready = false;
        });

        // fires if connection fails or is refused
        this.client.on('error', (err) => {
            console.error("Connection error:", err.message);
            this.ready = false;
        });

    }

    send(data){
        const payload = `[SOF]\n${data}\n[EOF]`;
        this.client.write(Buffer.from(payload));
    }
}

const c = new MyProtocol();
c.send("Hello World");
