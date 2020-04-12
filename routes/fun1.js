var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    var path0 = req.baseUrl.replace("/","") 
    res.render('fun1/index.ejs', { path0: path0})
})

router.get('/test', function (req, res) {
    res.send('fun1 page')
})

module.exports = router