const express = require("express")
const app = express()
const bp = require("body-parser")
const Produto = require("./produto")
const {engine} = require("express-handlebars")

app.engine('handlebars', engine({
  defaultLayout: 'main', 
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}))
app.set('view engine', 'handlebars')

app.use(bp.urlencoded({extend: false}))

app.use(bp.json())

app.get('/', (req, res) => {
    res.send("Initial Page")
})

app.get('/produto', (req, res) => {
    Produto.findAll({order: [['nome', 'ASC']]}).then((produtos) => {
      res.render('produto', {produtos: produtos})
    })
})

app.get('/cad-produto', (req, res) => {
    res.render('cad-produto')
})

app.post('/add-produto', (req, res) => {
				Produto.create({
								nome: req.body.nome,
								categoria: req.body.categoria,
								descricao: req.body.descricao
				})
				.then(() => {
				  res.redirect("/produto")
				})
				.catch((err) => {
				  res.send("Erro ao tentar cadastrar: "+err)
				})
})

app.get('/del-produto/:id', (req, res) => {
  Produto.destroy({
    where: {id: req.params.id}
  })
  .then(() => {
    res.redirect("/produto")
  })
  .catch((err) => {
    res.send("Erro ao tentar excluir: "+err)
  })
})

app.listen("3001", () => console.log("Server Is Running"))
