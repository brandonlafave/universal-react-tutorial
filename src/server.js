// load the dependencies we need
import path from 'path';
import express from 'express';
import http from 'http';

// defined constants
const app  = express();
const port = process.env.PORT || 8080;
const env  = process.env.NODE_ENV || 'production';

// set the path that static assets are served from
app.use(express.static(path.join(__dirname, 'static')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the path for the views directory
app.set('views', path.join(__dirname, 'views'));

// set default route
app.get('/', function(req, res) {
	res.render('index');
});

// start the server
app.listen(port, err => {
	if (err) {
		// logs the error to the console
		return console.error(err);
	} else {
  		// logs server information to the console
  		console.info(`Server listening on port ${port} [${env}]`);
	}
});