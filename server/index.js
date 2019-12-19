var express = require('express')
var app = express()
var cors = require('cors')
var login = require("./routers/login")
var home = require("./routers/home")

app.use(cors())


//hangi uzantılar için hangi route objesinin kullanacağı belirtildi.

app.use("/home", home)
app.use("/login", login)
app.listen(7000, () => console.log("Server hazır port 7000 dinleniyor."));


