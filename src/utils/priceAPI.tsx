function create(data) {
	return fetch("../../functions/price-create", {
		body: JSON.stringify(data),
		method: "POST",
	}).then(response => {
		return response.json();
	});
}

function netlifyCreate(data) {
	return fetch("/.netlify/functions/price-create", {
		body: JSON.stringify(data),
		method: "POST",
	}).then(response => {
		return response.json();
	});
}

function readAll() {
	return fetch("/.netlify/functions/price-read-all").then(
		response => {
			return response.json();
		},
	);
}

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
