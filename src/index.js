// Set Up Global Variables

export const projects = [];
export const currentProject = document.getElementById('current-project');
import { Todo } from './todoLogic.js';
import { Project, addProject, removeProject } from './projectLogic.js';
import { renderProjects } from './projectDom.js';
import { projectContainer } from './projectDom.js';
import { todoContainer } from './todoDom.js';
import { renderTodos } from './todoDom.js';
import { overlay, displayOverlayOn, displayOverlayOff, formFadeIn, formFadeOut } from './overlay.js';
const addForm = document.getElementById('add-todo');
const addProjectText = document.getElementById('add-project');
const submitProject = document.getElementById('submit-project');
const todoForm = document.getElementById('todo-form');

// DOM logic

renderProjects();

// Render Todo's for clicked Project
projectContainer.addEventListener('click', (e) => {

	if(e.target.id === 'project-container') { return null; }

	const deleteBtn = document.createElement('input');
	deleteBtn.className = 'delete';
	deleteBtn.value = 'X';

	currentProject.textContent = e.target.textContent;
	currentProject.className = e.target.id;
	currentProject.appendChild(deleteBtn);

	todoContainer.innerHTML = ``;

	renderTodos();

});

// Remove current Project and its todo's
currentProject.addEventListener('click', (e) => {

	if(e.target.className !== 'delete') { return null; }

	const confirmDelete = prompt(`Are you sure you want to remove the project '${currentProject.textContent}'?`);
	let userAnswer = confirmDelete === null ? null : confirmDelete.toLowerCase();

	switch(userAnswer) {
		case "yes" :
			removeProject(currentProject.className);
			projectContainer.innerHTML = ``;
			currentProject.innerHTML = ``;
			todoContainer.innerHTML = ``;
			renderProjects();
			break;
		case "no" :
			return null;
			break;
		default :
			return null;	
	}

});

//Add Project
submitProject.addEventListener('click', () => {

	if(addProjectText.value === '') { return null; }

	const userInputProject = new Project(addProjectText.value);
	addProject(userInputProject);
	projectContainer.innerHTML = '';
	renderProjects();
	addProjectText.value = '';

});

// Add Todo
const userTitle = document.getElementById('user-title');
const userDescription = document.getElementById('user-description');
const userDate = document.getElementById('user-date');
const setPriority = document.getElementById('set-priority');
const submitTodo = document.getElementById('submit-todo');


submitTodo.addEventListener('click', () => {

	if(!currentProject.textContent) {
		alert('Please Select a Project!');
		return null;
	}
	 
	todoContainer.innerHTML = ``;
	const userInputTodo = new Todo(userTitle.value, userDescription.value, userDate.value, setPriority.checked);
	if (setPriority.checked) {
		userInputTodo.priority = true;
	} else {
		userInputTodo.priority = false;
	}
	const targetProject = projects.find(function(project){
		return project.name === currentProject.textContent;
	});
	targetProject.addTodo(userInputTodo);
	renderTodos(targetProject);
	todoForm.style.display = 'none';
	addForm.style.display = 'grid';
	displayOverlayOff();
	userTitle.value = '';
	userDescription.value = '';
	userDate.value = '';
	setPriority.checked = false;


});

// Remove Todo
todoContainer.addEventListener('click', (e) => {

	if (e.target.className === 'delete-todo') {
		const targetProject = projects.find(function(project){
			return project.name === currentProject.textContent;
		});

		targetProject.removeTodo(e.target.parentNode.className);
		todoContainer.innerHTML = ``;
		renderTodos();
	}
	
});

// Popup list for adding todo
addForm.addEventListener('click', () => {
	displayOverlayOn();
	formFadeIn(todoForm);
	todoForm.style.display = 'grid';
});

// exit add todo form
const exitForm = document.getElementById('exit');

exitForm.addEventListener('click', () => {
	formFadeOut(todoForm);
	setTimeout(function() {
		todoForm.style.display = 'none';
		displayOverlayOff();
	}, 500);
});

// display todo info
const todoInfo = document.getElementById('todo-info');
const titleInfo = document.getElementById('title-info');
const dateInfo = document.getElementById('due-date');
const descInfo = document.getElementById('desc-info');


todoContainer.addEventListener('click', function(e) {

	if (e.target.className !== 'delete-todo' && e.target.id !== 'todo-container') {
		const targetProject = projects.find(function(project){
			return project.name === currentProject.textContent;
		});
		const targetTodo = targetProject.list.find(function(todo){
			return todo.title === e.target.textContent;
		});
		formFadeIn(todoInfo);
		titleInfo.textContent = targetTodo.title;
		dateInfo.textContent = targetTodo.dueDate;
		descInfo.textContent = targetTodo.description;
		displayOverlayOn();
		todoInfo.style.display = 'grid';
	}

});

// exit todo info popup
const exitTodoInfo = document.getElementById('exit-todo-info');

exitTodoInfo.addEventListener('click', () => {
	formFadeOut(todoInfo);
	setTimeout(function() {
		todoInfo.style.display = 'none';
		displayOverlayOff();
	}, 500);
});