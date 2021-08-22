import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-input';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

	const toDoData = [
		{label: 'Drink Coffee', important: false, id:1 },
		{label: 'Create React App', important: false, id:2},
		{label: 'Check up your health', important: true, id:3},
		{label: 'Turn off your phone', important: true, id:4},
	];

	return(
		<div className="todo-app">
		<AppHeader toDo={1} done={3}/>
			<div className="top-panel d-flex">
			<SearchPanel/>
			<ItemStatusFilter />
			</div>

			<TodoList todos={toDoData}/>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));