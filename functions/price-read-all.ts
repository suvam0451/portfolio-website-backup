exports.handler = (event, context) => {
	/* Import faunaDB sdk */
	const faunadb = require("faunadb");
	const q = faunadb.query;

	const client = new faunadb.Client({
		// secret: process.env.FAUNADB_SERVER_SECRET
		secret: "fnADhf5syxACEkU9u5nT1K-yz9LykWTTHPhfnAmi",
	});
	return client
		.query(q.Paginate(q.Match(q.Ref("indexes/all_tp-prices-hv"))))
		.then(response => {
			const priceRefs = response.data;

			const getAllPriceQuery = priceRefs.map(ref => {
				return q.Get(ref);
			});

			// Use the array to get dataset.
			return client.query(getAllPriceQuery).then(response => {
				return {
					statusCode: 200,
					body: JSON.stringify(response),
				};
			});
		})
		.catch(error => {
			return {
				statusCode: 400,
				body: JSON.stringify(error),
			};
		});
};
