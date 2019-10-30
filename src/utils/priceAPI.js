const create = (data) => {
    console.log("data is: " + data)
    return fetch('../../functions/price-create', {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
}

const netlifyCreate = (data) => {
  // console.log("data input is: " + data);

  return fetch('/.netlify/functions/price-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
  CreateTable: create,
  netlifyFunc: netlifyCreate
}