const mysql = require('mysql')

const connection = mysql.createConnection({
				host: 'db4free.net',
				user: 'andre_root8224',
				password: 'andre_root8224',
				database: 'andreteste01'
})

connection.connect((err) => err ? console.log(err):console.log("DB CONNECTED, Id: "+connection.threadId))

connection.query("update produtos set nome = 'piscinão' where id = 1", (err) => err?console.log(err):console.log("query concluída com sucesso! "))
