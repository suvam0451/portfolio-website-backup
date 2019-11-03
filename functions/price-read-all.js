/* Import faunaDB sdk */
const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  // secret: process.env.FAUNADB_SERVER_SECRET
  secret: "fnADb5ABiOACAtWG18IhHbeZdgekEkYY3euhHLVW"
})

// Main
exports.handler = (event, context) => {
    return client.query(q.Paginate(q.Match(q.Ref('indexes/all_prices'))))
        .then((response) =>{
            const priceRefs = response.data;
            console.log(`${priceRefs.length} prices found`);

            const getAllPriceQuery = priceRefs.map((ref) => {
                // console.log("here we are", ref);
                return q.Get(ref)
            });
            
            // Use the array to get dataset.
            return client.query(getAllPriceQuery).then((response) => {
                console.log("here we are", JSON.stringify(response));
                console.log("data output is: " + response[0]);
                return {
                  statusCode: 200,
                  body: JSON.stringify(response)
                }
            });
        })
        .catch((error) => {
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        });
}