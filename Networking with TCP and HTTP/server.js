const net = require('net');

const server = net.createServer();
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server is on port: ${PORT}`);
});

const allClients = [];

server.on('connection', (client) => {
  allClients.push(client);
  console.log('Someone has connected');
  client.write('Can you see this?!');

  client.setEncoding('utf-8');

  client.on('data', (message) => {
    for(const singleClient of allClients) {
     singleClient.write(message) 
    }
  });
});




// localhost:3000
// 192.3.13.3422.1:3000