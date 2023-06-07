const net = require('net');

const config = {
  host: 'localhost', 
  port: 3000
}

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (message) => {
  console.log('The server message: ',message)
});

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (message) => {
  console.log('Message from my Terminal: ', message);
  client.write(message)
});