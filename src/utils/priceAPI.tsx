const create = (data :any) => {
	return fetch("../../functions/price-create", {
		body: JSON.stringify(data),
		method: "POST",
	}).then(response => {
		return response.json();
	});
};

const netlifyCreate = (data : any) => {
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
			return response.json();
		},
	);
};

function getTodoId(todo : any) {
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
