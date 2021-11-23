const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Então é natal!')
})

app.listen(process.env.PORT || 5000)
