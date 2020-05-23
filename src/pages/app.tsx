import React, { useState, useEffect } from "react";
import {
	Router as MyRouter,
	RouteComponentProps,
} from "@reach/router";
// import Layout from "../components/Layout"

const App = () => {
	return (
		<MyRouter>
			<RandomImage path="/app/random/:name/:repo" />
			<ListPerson path="/app/random/:results" />
		</MyRouter>
	);
};

interface RandomImageProp
	extends RouteComponentProps<{
		name: string;
		repo: string;
	}> {}

interface Props
	extends RouteComponentProps<{
		results: string;
	}> {}

export const RandomImage: React.FC<RandomImageProp> = ({
	name,
	repo,
}) => {
	const [person, setPerson] = useState();
	const [repository, setRepo] = useState();
	const [retval, setRetval] = useState();

	useEffect(() => {
		getData();
	}, []);

	// Don't set state in useEffect
	async function getData() {
		fetch(
			"https://dev.azure.com/suvam0451/13408b0d-5303-4e68-9b6b-048561bd3d0d/_apis/git/repositories/91e53a89-5f88-49a5-b9a7-ea53527b6017/items?path=%2Fimages.json&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true",
			{
				mode: "cors",
				// headers: {
				//     'Content-Type': 'text/plain'
				// },
			},
		)
			.then((x) => x.json())
			.then((x) => {
				setRetval(x);
				console.log(x);
			});
	}

	return (
		<div>
			<pre>{JSON.stringify(retval, null, 2)}</pre>
		</div>
	);
};

export const ListPerson: React.FC<Props> = ({ results }) => {
	// Variables
	const [person, setPerson] = useState();
	// https://gitlab.com/suvam0451/website-cdn-a/-/raw/master/example.json
	// https://randomuser.me/api
	// https://raw.githubusercontent.com/LearnWebCode/json-example/master/pet-of-the-day.json
	// https://dev.azure.com/suvam0451/13408b0d-5303-4e68-9b6b-048561bd3d0d/_apis/git/repositories/91e53a89-5f88-49a5-b9a7-ea53527b6017/items?path=%2FREADME.md&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true
	// https://dev.azure.com/suvam0451/13408b0d-5303-4e68-9b6b-048561bd3d0d/_apis/git/repositories/91e53a89-5f88-49a5-b9a7-ea53527b6017/items?path=%2Fimages.json&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true
	useEffect(() => {
		fetch(
			"https://dev.azure.com/suvam0451/13408b0d-5303-4e68-9b6b-048561bd3d0d/_apis/git/repositories/91e53a89-5f88-49a5-b9a7-ea53527b6017/items?path=%2Fimages.json&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true",
			{
				mode: "cors",
				// headers: {
				//     'Content-Type': 'text/plain'
				// },
			},
		)
			.then((x) => x.json())
			.then((x) => console.log(x))
			.then(() => {
				console.log(results);
			});
		// .then(x=> console.log(JSON.parse(x.arrayBuffer.toString())))
		// .then((text)=> {
		// console.log(JSON.parse(text))
		// })
		// .then(x=> x.text())
		// .then((dataStr) => {
		// console.log("yeet" + dataStr)
		// let data = JSON.parse(dataStr)
		// console.log(data)
		// })
		// .then(x=> x.json())
		// .then(x => setPerson(x))
		// .then((x)=> {
		//     console.log(x.json())
		//     // return x.json()
		// }).then((x)=>{

		// })

		// .then(x => x.blob())
	});

	return (
		<div>
			<pre>{JSON.stringify(person, null, 2)}</pre>
		</div>
	);
};

export default App;
