import { pageInitializer } from "./page_initializer";
import {     
    newProject,
    newToDoEntry,
    projectsArray 
} from "./todo_logic";

import { refreshProjectsView } from "./dom_functions";
import './styles.css';


// waits for HTML bones to load before using DOM to add elements
window.addEventListener('load', function () {
    pageInitializer();

    // make a test object
    let firstProject = newProject('Home');
    projectsArray.push(firstProject);

    let secondProject = newProject('Fitness');
    projectsArray.push(secondProject);

    // let firstToDoEntry = newToDoEntry('Play with Cats', 'Spend some time playing with cats so they burn energy', '04/30/2020', '3', 'No');
    // let firstEntrySubTask1 = newToDoEntry("Athena", "Brush her fur", "04/27/2020", "3", "No" );
    // firstEntry["subTask1"] = firstEntrySubTask1;
    
    console.log(projectsArray);
    refreshProjectsView();

});