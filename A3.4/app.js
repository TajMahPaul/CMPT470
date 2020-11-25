const express = require('express')
const app = express()
const port = 3000

const routes = {
	rectangles: require('./controllers/rectangles'),
	// Add more routes here...
};

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})