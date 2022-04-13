const express = require("express")
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
