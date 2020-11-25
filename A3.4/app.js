const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')
const session = require('express-session')

const app = express()
const port = 80

const routes = {
	rectangles: require('./controllers/rectangle'),
	// Add more routes here...
};

app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs');

for (const [routeName, routeController] of Object.entries(routes)) {
	if (routeController.getAll) {
		app.get(
			`/`,
			routeController.getAll
		);
	}
	if (routeController.getById) {
		app.get(
			`/api/${routeName}/:id`,
			routeController.getById,
		);
	}
	if (routeController.create) {
		app.post(
			`/api/${routeName}`,
			routeController.create
		);
	}
	if (routeController.update) {
		app.post(
			`/api/${routeName}/:id`,
			routeController.update
		);
	}
	if (routeController.remove) {
		app.post(
			`/api/${routeName}/delete/:id`,
			routeController.remove
		);
	}
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})