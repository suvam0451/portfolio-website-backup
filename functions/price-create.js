/* Import faunaDB sdk */
// require('dotenv').config()
const faunadb = require('faunadb');

/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
  // secret: process.env.FAUNADB_SERVER_SECRET
  secret: fnADb5ABiOACAtWG18IhHbeZdgekEkYY3euhHLVW
})

/* export our lambda function as named "handler" export */
exports.handler = async (event, context, callback) => {

    console.log(process.env.FAUNADB_SERVER_SECRET);
    /* parse the string body into a useable JS object */
    const data = JSON.parse(event.body)
    console.log('Function `todo-create` invoked', data)
    const todoItem = {
      data: data
    }
    /* construct the fauna query */
    return client.query(q.Create(q.Ref('classes/prices'), todoItem))
      .then((response) => {
        // console.log('success', response)
        /* Success! return the response with statusCode 200 */
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(response)
        });
      }).catch((error) => {
        console.log('error', error)
        /* Error! return the error with statusCode 400 */
        return callback(null, {
          statusCode: 400,
          body: JSON.stringify(error)
        });
      })
  }