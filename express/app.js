const express = require("express")
const app = express()

app.get("/", function(req,res){
  res.send("pagina principal")
})

app.get("/sobre", (req,res) => {
  res.send("pagina sobre")
})

app.get("/contato", (req, res) => {
  res.send("pagina de contato")
})

app.listen(8081,function(){
  return console.log("server is running")
})