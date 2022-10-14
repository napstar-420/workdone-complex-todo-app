import UI from "./UI";

export default class Project {
    static projectList = [];
    static openProjectModelBtn = document.getElementById(
        "open-project-model-btn"
    );
    static createProjectBtn = document.getElementById("add-project-btn");
    static cancelAddProjectBtn = document.getElementById(
        "cancel-add-project-btn"
    );
    static projectsTab = document.getElementById("projects-tab");
    static projectName = document.getElementById("project-title");

    static addProject = function addProjectToProductList(project, list) {
        list.push(project);
    };

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

    addTask(task) {
        this.tasks.push(task);
    }
}
