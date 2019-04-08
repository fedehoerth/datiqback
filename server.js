const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8000;

MongoClient.connect('mongodb://sansacc:sancarlos7@ds151028.mlab.com:51028/datiq', { useNewUrlParser: true }, (err, client) => {
		const db = client.db('datiq');
// const collection = db.collection('persons');
	if (err) return console.log(err);
		require('./app/routes')(app, db);
		app.listen(port, () => {
			console.log(`We are live on Port: ${port}`);
		});
});
