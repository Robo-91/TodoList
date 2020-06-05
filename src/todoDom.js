import { projects } from './index.js';
import { currentProject } from './index.js';
export const todoContainer = document.getElementById('todo-container');

// Render Todo's
export const renderTodos = (curProject) => {

	curProject = projects.find(function(project) {
		return project.name === currentProject.textContent;
	});

	curProject.list.forEach((todo, id) => {
		const todoTitle = document.createElement('div');
		todoTitle.textContent = todo.title;
		todoTitle.className = id;

		const deleteTodo = document.createElement('input');
		deleteTodo.className = `delete-todo`;
		deleteTodo.value = 'X';

		todoTitle.appendChild(deleteTodo);
		todoContainer.appendChild(todoTitle);
	});

}