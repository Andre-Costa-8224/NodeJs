const express = require("express")
const Sequelize = require("sequelize")

const sequelize = new Sequelize("teste", "u0_a1269", "", {
				host: "localhost",
				dialect: "mariadb",
				port: "3306"
})


sequelize.authenticate().then(() => console.log("conectado com sucesso!")). catch ((err) => console.log("erro: "+err))

/*
const produtos = sequelize.define("produto", {
				nome: {
								type: Sequelize.STRING
				},
				categoria: {
								type: Sequelize.STRING
				},
				descricao: {
								type: Sequelize.TEXT
				}
})

produtos.sync({force: true})
*/

const app = express()

app.get("/", function(req,res){
  res.sendFile(__dirname + "/view/index.html")
})

app.get("/sobre", (req,res) => {
  res.sendFile(__dirname + "/view/sobre.html")
})

app.get("/contato", (req, res) => {
  res.sendFile(__dirname + "/view/contato.html")
})

app.listen(8081,function(){
  return console.log("server is running")
})
