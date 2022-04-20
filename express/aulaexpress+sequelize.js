const express = require("express")
const Sequelize = require("sequelize")

//--------parte de Conexão Com Banco----

const sequelize = new Sequelize("andreteste01", "andre_root8224", "andre_root8224", {
				host: "db4free.net",
				dialect: "mysql",
				port: '3306'
})


sequelize.authenticate().then(() => console.log("conectado com sucesso!")). catch ((err) => console.log("erro: "+err))


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

const btn = () => {produtos.create({
	nome: "Limão",
	categoria: "Frutas",
	descricao: "Uma Fruta Cítrica Com Alto Nível De pH"
})}



produtos.sync({force: true})

//-------------parte de http------------

const app = express()

app.get("/", function(req,res){
  res.sendFile(__dirname + "/view/index.html")
})

app.get("/produtos", (req, res) => {
	res.send(`<button onclick={${btn()}}>enviar</button>`)
})

app.get("/sobre", (req,res) => {
  res.sendFile(__dirname + "/view/sobre.html")
})

app.get("/contato", (req, res) => {
  res.sendFile(__dirname + "/view/contato.html")
})

//inicia a aplicação na porta 8081
app.listen(8081,function(){
  return console.log("server is running")
})
