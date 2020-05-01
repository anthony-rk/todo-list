import { getNewProjectTitle } from "./todo_logic";
import { refreshProjectsView } from "./dom_functions";

// Initialize the page

let component = function(newElement, newInnerHTML, newID) {
    const element = document.createElement(newElement);
    element.innerHTML = newInnerHTML;
    element.setAttribute("id", newID);

    return element;
};

let pageInitializer = function() {
    // Project related HTML
    const projectHolderDiv = component("div", '', "projects-list");
    document.getElementById("content").appendChild(projectHolderDiv);

    const newProjectButton = component('button', 'New Project', 'new-project-button');
    document.getElementById("projects-list").appendChild(newProjectButton);
    newProjectButton.addEventListener('click', function() {
        getNewProjectTitle();
        refreshProjectsView();
    });


    // ToDo related HTML
    const toDoListHolderDiv = component("div", "toDoListHolderDiv", "todos-list");
    document.getElementById("content").appendChild(toDoListHolderDiv);



    console.log("pageInitializer function ran..");
};

export {
    pageInitializer
}
