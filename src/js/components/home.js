import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";

//create your first component
import "./index.css";
function Home() {
	const APIURL = "https://assets.breatheco.de/apis/fake/todos/user/bacanasos";
	const getSampleTask = () => {
		fetch(APIURL)
			.then((response) => response.json())
			.then((response) => console.log(response));
	};
	const updateURL = () => {
		fetch(APIURL, {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => response.json());
	};
	useEffect(() => {
		getSampleTask();
	}, []);
	return (
		<div className="todo-home">
			<TodoList />
		</div>
	);
}

export default Home;
