const db = require("./db")

const produto = db.sequelize.define("produtos", {
				nome: {
								type: db.Sequelize.STRING
				},
				categoria: {
								type: db.Sequelize.STRING
				},
				descricao: {
								type: db.Sequelize.TEXT
				}
})

//produto.sync()

module.exports = produto
