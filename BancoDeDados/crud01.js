const mysql = require('mysql')

const connection = mysql.createConnection({
				host: 'db4free.net',
				user: 'root',
				password: 'root',
				database: 'testes'
})

connection.connect((err) => err ? console.log(err):console.log("DB CONNECTED, Id: "+connection.threadId))

connection.query("insert into produtos(nome, categoria, descricao) values('piscina', 'lazer', 'piscina de 5 mil litros')", (err) => err?console.log(err):console.log("query concluída com sucesso! "))
