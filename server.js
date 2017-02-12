
// load the dependencies we need
import express from 'express';
import http from 'http';

// defined constants
const app  = express();
const port = process.env.PORT || 3000;
const env  = process.env.NODE_ENV || 'production';

// use the public folder to serve static assets
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

//
app.set('*', (req, res) => {
	res.render('index');
});

// start the server
app.listen(port, err => {
	if (err) {
		// logs the error to the console
		return console.error(err);
	} else {
  		// logs server information to the console
  		console.info('Server listening on port + ${port} [${env}]');
	}
});