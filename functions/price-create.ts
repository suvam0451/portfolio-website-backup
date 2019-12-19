const axios = require("axios");
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
	// secret: process.env.FAUNADB_SERVER_SECRET
	API_CLIENT_SECRET: "fnADb5ABiOACAtWG18IhHbeZdgekEkYY3euhHLVW",
});

/* export our lambda function as named "handler" export */
exports.handler = async (event, context, callback) => {
	const data = JSON.parse(event.body);
	const todoItem = {
		data: data,
	};

	/* construct the fauna query - FaunaDB - response handle/catch error */
	return client
		.query(q.Create(q.Ref("classes/prices"), todoItem))
		.then(response => {
			return callback(null, {
				statusCode: 200,
				body: JSON.stringify(response),
			});
		})
		.catch(error => {
			return callback(null, {
				statusCode: 400,
				body: JSON.stringify(error),
			});
		});
};
