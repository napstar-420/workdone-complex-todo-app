import Project from "./project";
import Task from "./task";

export default class UI {
    static openAddTaskModel () {
        const model = document.getElementById('add-task-model');
        model.classList.remove('hidden');
    }
    static closeAddTaskModel () {
        const model = document.getElementById('add-task-model');
        model.classList.add('hidden');
    }
    static openAddProjectModel () {
        const model = document.getElementById('add-project-model');
        model.classList.remove('hidden');
    }

    static createProjectNameErrorMsg (name) {
        const span = document.querySelector('.project-name-error-msg');
        span.textContent = `${name} project has already been made.`;
    }

    static closeAddProjectModel() {
        const model = document.getElementById('add-project-model');
        model.classList.add('hidden');
        const span = document.querySelector('.project-name-error-msg');
        span.textContent = '';
    }


    static addProjectToUI (projectsTab, project) {
        // Adds the Project nav link to side nav
        const projectLink = document.createElement('button');
        projectLink.classList.add('nav_link');
        projectLink.textContent = project.name;
        projectsTab.appendChild(projectLink);
        // Adds the Project option in the Add task model select
        const projectOption = document.createElement('option');
        projectOption.value = project.id;
        projectOption.textContent = project.name;
        Task.taskProject.appendChild(projectOption);
        // Closes the Add Project Model
        this.closeAddProjectModel()
    }


}