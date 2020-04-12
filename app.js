const express = require('express')
const app = express()
app.set("view engine","ejs")
app.use(express.static('public'))
const port = 3000

//定义路由
var fun1 = require('./routes/fun1.js')
var fun2 = require('./routes/fun2.js')
var fun3 = require('./routes/fun3.js')


//使用路由
app.use('/fun1', fun1)
app.use('/fun2', fun2)
app.use('/fun3', fun3)

//访问跟目录会重定向到首页
app.get('/', (req, res) => res.redirect('/fun1'))

app.listen(port,"0.0.0.0", () => console.log(`请访问：127.0.0.1:${port}`))