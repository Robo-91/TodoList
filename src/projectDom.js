import { projects } from './index.js';
export const projectContainer = document.getElementById('project-container');

// Render all Projects

export const renderProjects = () => {
		projects.forEach((project, id) => {
		const title = document.createElement('button');
		title.id = id;
		title.textContent = project.name;
		projectContainer.appendChild(title);
	});
}