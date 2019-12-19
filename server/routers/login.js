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
   





    let arr = []
    //gelen isteği aldık
    let newUser = req.body
    //tum uyelerimizi okuduk
    let data = fs.readFileSync("user.json");
    uyeler = JSON.parse(data)
    //önceki üyelere yeni üyeyi ekledik
    arr.push(...uyeler, newUser)
    //tüm üyeleri formatlı olarak dosyaya yazdık format: (iç içe objelerde 2 boşluk bırakarak) 
    fs.writeFileSync("user.json", JSON.stringify(arr, undefined, 2))
  
    res.send({err:false})
})

module.exports = login