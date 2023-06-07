process.stdin.on('data', (message) => {
  console.log('Message from my Terminal: ', message);
});

process.stdin.setEncoding('utf-8');