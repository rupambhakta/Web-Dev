const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log('Hay its a get request');
  res.send('Hello World!')
})

// app.post('/', (req, res) => {
//   console.log('Hay its a post request');
//   res.send('Hello World post!')
// })

// app.put('/', (req, res) => {
//   console.log('Hay its a put request');
//   res.send('Hello World put!')
// })


app.put('/index',(req, res) => {
  console.log('Hay its index');
  res.sendFile('template/index.html',{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})