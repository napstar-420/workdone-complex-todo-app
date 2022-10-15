import UI from "./UI";

export default class Project {
    // Stores all the Project
    static projectList = [];

    // Button that open new Project Model
    static openProjectModelBtn = document.getElementById(
        "open-project-model-btn"
    );

    // Button that creates a new Project
    static createProjectBtn = document.getElementById("add-project-btn");

    // Button that closes the new Project model
    static cancelAddProjectBtn = document.getElementById(
        "cancel-add-project-btn"
    );

    // Where all the Project links are shown in the UI
    static projectsTab = document.getElementById("projects-tab");

    // Input tag in which user can type new project name
    static projectName = document.getElementById("project-title");

    // Adds Created project to the Project list
    static addProject = function addProjectToProductList(project, list) {
        list.push(project);
    };

    // Creates a new Project
    static createProject = function createProjectAndUpdateUI(e) {
        e.preventDefault();
        const projectName = Project.projectName.value;
        if (Project.checkProject(projectName) !== false) {
            const project= new Project(projectName);
            Project.addProject(project, Project.projectList);
            UI.addProjectToUI(Project.projectsTab, project);
            Project.projectName.value = "";
        }
    };

    // Check if Project name is valid and has not already been created
    static checkProject = function checkIfProjectAlreadyExistAndNameIsValid(name) {
        let newProjectName = name;
        newProjectName = newProjectName.trim();
        if (newProjectName !== "") {
            for(const project of Project.projectList) {
                if(project.name === newProjectName) {
                    UI.createProjectNameErrorMsg(newProjectName);
                    return false;
                }
            }
            return true
        }
        return false;
    };

    constructor(name) {
        this.name = name;
        this.id = Project.projectList.length;
        this.tasks = [];
    }

    // Pushes task to Tasks array of the project
    addTask(task) {
        this.tasks.push(task);
    }
}
