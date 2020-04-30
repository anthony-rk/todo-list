// Initialize the page

function component(newElement, newInnerHTML, newID) {
    const element = document.createElement(newElement);
    element.innerHTML = newInnerHTML;
    element.setAttribute("id", newID);

    return element;
};

let pageInitializer = function() {
    const projectHolderDiv = component("div", 'projectHolderDiv', "projects");
    document.getElementById("content").appendChild(projectHolderDiv);

    const toDoListHolderDiv = component("div", "toDoListHolderDiv", "")

    console.log("pageInitializer function ran..");
};

export {
    pageInitializer
}
