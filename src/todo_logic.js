// Define ToDo Objects and various related functions here
let projectsArray = [];

// Create the Object Constructor for Project entries
function Project(title) {
    this.title = title;
};

// Create the Object Constructor for ToDo entries
function ToDoEntry(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
};


// Functions to get Object fields
ToDoEntry.prototype.getTitle = function() { return this.title; };

ToDoEntry.prototype.getDescription = function() { return this.description; };

ToDoEntry.prototype.getDueDate = function() { return this.dueDate; };

ToDoEntry.prototype.getPriority = function() { return this.priority; };

ToDoEntry.prototype.getCompleted = function() { return this.completed; };


// Function for updating ToDo Title
ToDoEntry.prototype.updateToDoTitleField = function(newTitle) { this.title = newTitle; };

// Function for updating ToDo Description
ToDoEntry.prototype.updateToDoDescriptionField = function(newDesc) { this.description = newDesc; };

// Function for updating ToDo Due Date
ToDoEntry.prototype.updateToDoDueDateField = function(newDue) { this.dueDate = newDue; };

// Function for updating ToDo Priority
ToDoEntry.prototype.updateToDoPriorityField = function(newPriority) { this.priority = newPriority; };

// Functions for updating ToDo as Complete or not
ToDoEntry.prototype.updateToDoCompleteFieldToYes = function() { this.completed = 'Yes'; };
ToDoEntry.prototype.updateToDoCompleteFieldToNo = function() { this.completed = 'No'; };


// Function for creating new Project entry
// Need to store all Projects in an Array of Objects
let newProject = function(title) {
    let tempProject = new Project(title);
    return tempProject;
};

let getNewProjectTitle = function() {
    let newProjectInputTitle = prompt('Please enter a new Project:', 'Personal Finance');
    projectsArray.push(newProjectInputTitle);
};

// Function for creating new ToDoEntry
let newToDoEntry = function(title, description, dueDate, priority, completed) {
    let tempToDo = new ToDoEntry(title, description, dueDate, priority, completed);
    return tempToDo;
};


export {
    newProject,
    getNewProjectTitle,
    newToDoEntry,
    projectsArray
}