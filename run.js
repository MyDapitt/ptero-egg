console.log('Welcome to your server!\nType your command and send it to your server on "type a command..."')
require('child_process').spawn('bash', [], {
  stdio: ['inherit', 'inherit', 'inherit', 'ipc']
})
