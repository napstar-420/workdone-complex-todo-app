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
        if(this.isProjectOpened(id) === true) {
            UI.resetTaskContainer()
        }
        this.projectList = [...Project.projectList.filter(project => project.id !== id)];
        Task.taskList = [...Task.taskList.filter(task => parseInt(task.projectId) !== id)];
        console.log(Task.taskList)
        BrowserStorage.updateStorage();
        BrowserStorage.updateTaskList();
        UI.renderProjectsTab();
    }

    // Opens Project when users clicks a Project link
    static openProject(projectId) {
        [...document.querySelectorAll('.nav_link')].map(link => link.classList.remove('active'));
        [...document.querySelectorAll('.nav_link')].map(link => {
            if(parseInt(link.getAttribute('data-projectId')) === projectId){
                link.classList.add('active');
            }
        })
        Project.projectList.map(project => {
            project.isOpened = false;
            if(project.id === parseInt(projectId)) {
                UI.renderTasks(project);
                project.isOpened = true;
            }
        })
    }

    
    static removeTaskFromProjectList(projectId, taskId) {
        Project.projectList.map(project => {
            if(project.id === projectId) {
                project.tasks = project.tasks.filter(task => task.taskId !== taskId)
            }
        });
    }

    static getProject(id) {
        let projectObj = {}
        Project.projectList.map(project => {
            if(project.id === id) {
                projectObj = {...project};
            }
        });
        return projectObj;
    }

    static isProjectOpened(id) {
        const project = this.getProject(id);
        if(project.isOpened === true) {
            return true;
        }
    }

    constructor(name) {
        this.name = name;
        this.id = Project.projectList.length === 0 ? 0 : Project.projectList[Project.projectList.length - 1].id + 1;
        this.isOpened = false;
        this.tasks = [];
    }

    // Pushes task to Tasks array of the project
    addTask(task) {
        this.tasks.unshift(task);
    }
}
