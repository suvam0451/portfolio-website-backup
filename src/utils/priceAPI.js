const create = data => {
	console.log("data is: " + data);
	return fetch("../../functions/price-create", {
		body: JSON.stringify(data),
		method: "POST",
	}).then(response => {
		return response.json();
	});
};

const netlifyCreate = data => {
	// console.log("data input is: " + data);

	return fetch("/.netlify/functions/price-create", {
		body: JSON.stringify(data),
		method: "POST",
	}).then(response => {
		return response.json();
	});
};

const readAll = () => {
	return fetch("/.netlify/functions/price-read-all").then(
		response => {
			// alert(response);
			// const myBody = response.body;
			return response.json();
		},
	);
};

function getTodoId(todo) {
	if (!todo.ref) {
		return null;
	}
	return todo.ref["@ref"].id;
}

export default {
	CreateTable: create,
	readAll: readAll,
	netlifyFunc: netlifyCreate,
	getTodoId: getTodoId,
};
