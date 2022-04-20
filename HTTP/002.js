const http = require("http")
const porta = 3000
const host = "127.0.0.1"

const servidor = http.createServer((req, res) => {
	res.writeHead("200", {'content-type': "text/html"})
	if(req==="/"){
		res.write("<h1>Welcome Home</h1>")
	}else if(req==="/sobre"){
		res.write("<h1>Talk About Us</h1>")
	}else if(req==="/contato"){
		res.write("<h1>Our Contacts</h1>")
	}
	res.end()
})

servidor.listen(porta, host, () => console.log("server is running"))