import React from "react";
//import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
//create your first component
import "./index.css";
function Home() {
	return (
		<div className="todo-home">
			<TodoList />
		</div>
	);
}

export default Home;
