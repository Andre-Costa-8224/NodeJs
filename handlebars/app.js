const express = require("express")
const app = express()
const {engine} = require("express-handlebars")

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.send("Initial Page")
})

app.get('/pagamento', (req, res) => {
    res.render('pagamento')
})

app.get('/add-pagamento', (req, res) => {
    res.render('add-pagamento')
})

app.listen("3001", () => console.log("Server Is Running"))