const express = require('express')
const app = express()
const port = 3000

console.log('new feature implemented');

app.get('/', (req, res) => res.send('Hello World from service b - now with extra feature!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))