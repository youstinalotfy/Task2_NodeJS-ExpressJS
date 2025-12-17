
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3002

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const MyData = require("./models/mydataschema")

app.get('/', (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname })
})

mongoose.connect(
  'mongodb+srv://USERNAME:PASSWORD@cluster0.0mmtg1x.mongodb.net/all-data'
)
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
})
.catch((err) => {
  console.log(err)
})

app.post('/', (req, res) => {
  console.log(req.body)

  const data = new MyData(req.body)

  data.save()
    .then(() => {
      res.redirect("/")
    })
    .catch((err) => {
      console.log(err)
    })
})


