const express = require('express')
const app = express()
const port = 3000

console.log('feature awesome')
console.log('new feature')

app.get('/', (req, res) => res.send('Hello World from serviceA!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))