// set up 'class' to create todo objects

export class Todo {
	constructor(title, description, dueDate, priority, complete) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.complete = false;
	}
}