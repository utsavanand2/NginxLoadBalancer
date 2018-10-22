const http = require('http')
const os = require('os')

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.write(os.hostname());
  	res.end();
	console.log("Got a request!")
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
