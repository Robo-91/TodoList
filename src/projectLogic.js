import { projects } from './index.js';

// set up 'class' to create project objects

export class Project {
	constructor(name, list) {
		this.name = name;
		this.list = [];
	}
}

// Add prototype for all projects to add todo's

Project.prototype.addTodo = function(newTodo) {
	this.list.push(newTodo);
}

// Add prototype for all projects to remove todo's

Project.prototype.removeTodo = function(todoId) {
	this.list.splice(todoId, 1);
}

// add a new project to projects array

export function addProject(projectName) {
	projects.push(projectName);
}

// remove project from array with specified index

export function removeProject(projectId) {
	projects.splice(projectId, 1);
}