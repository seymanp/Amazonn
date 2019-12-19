var express = require('express')
var fs = require("fs")
var login = express.Router()

login.get('/', function (req, res) {
    //dosya okundu
    let data1 = fs.readFileSync("user.json");
    //json formatında olduğu için objeye çevrildi
    let kullanıcı = JSON.parse(data1);
    //res.send(coffee.kahveler) direk kahveleri döndürebilirsin
   
    //okunan dosya bilgileri döndürüldü.
    res.send(kullanıcı)
   
})

login.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = login