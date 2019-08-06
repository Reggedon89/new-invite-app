const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))

app.use('/api', require('./routes/api'))
app.use('/', require('./routes'))

app.listen(8000, () => {
  console.log("Server listening on port 8000")
})