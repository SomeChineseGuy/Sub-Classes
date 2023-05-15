const http = require('http');
const PORT = 8080;

const server = http.createServer((request, response) => {
  console.log('Someone has connected');
  console.log(request.url);
  if(request.url === '/') {
    response.end('<h1>Welcome to my page!</h1>')
  } else if(request.url === '/helloworld') {
    response.end('<h2>Hello World!</h2>')
  } else if(request.url === '/cats') {
    response.end('Cats are the best!')
  } else if(request.url === '/hello') {
    response.end('Break is almost here')
  } else {
    response.end('There is nothing in this url path')
  }
});

server.listen(PORT, ()=> {
  console.log('Server is on!');
})