import BrowserStorage from "./Storage";
import Task from "./task";
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
        BrowserStorage.updateStorage()
    };

    // Creates a new Project
    static createProject = function createProjectAndUpdateUI() {
        const projectName = Project.projectName.value;
        if (Project.checkProject(projectName) !== false) {
            const project= new Project(projectName);
            Project.addProject(project, Project.projectList);
            UI.renderProjectsTab();
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
            return true;
        }
        return false;
    };

    static deleteProject(id) {
        this.projectList = [...Project.projectList.filter(project => project.id !== id)];
        BrowserStorage.updateStorage();
        UI.renderProjectsTab();
        if(parseInt(Task.taskContainer.firstElementChild.getAttribute('data-id')) === id) {
            UI.resetTaskContainer()
        }
    }

    constructor(name) {
        this.name = name;
        this.id = Project.projectList.length === 0 ? 0 : Project.projectList[Project.projectList.length - 1].id + 1;
        this.funConsole = () => {
            console.log(this.id)
        }
        this.tasks = [];
    }

    // Pushes task to Tasks array of the project
    addTask(task) {
        this.tasks.unshift(task);
    }
}
