import { projectsArray } from "./todo_logic";

// Functions to update the DOM 

let newComponent = function(newElement, newInnerHTML) {
    const element = document.createElement(newElement);
    element.innerHTML = newInnerHTML;

    return element;
};

let removeElementsByClass = function(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

// Function to update the Projects display
let refreshProjectsView = function() {
    // Remove previous Projects from the DOM
    removeElementsByClass('project-list-item');

    const projectsStart = document.getElementById('projects-list');
    
    // Iterate through projectsArray and add each project 
    projectsArray.forEach(function(item, index, projectsArray) {
        let tempDiv = newComponent('div', item['title']);
        tempDiv.classList.add('project-list-item');
        projectsStart.append(tempDiv);
        
    });

};

export {
    refreshProjectsView
}