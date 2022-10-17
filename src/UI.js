import Project from "./project";
import Task from "./task";
import format from "date-fns/format";
import BrowserStorage from "./Storage";

export default class UI {
    // Opens the model to create a new Task 
    static openAddTaskModel () {
        const model = document.getElementById('add-task-model');
        model.classList.remove('hidden');
    }

    // Close the model to create a new Task
    static closeAddTaskModel () {
        const model = document.getElementById('add-task-model');
        model.classList.add('hidden');
    }

    // Opens the model to create new project
    static openAddProjectModel () {
        const model = document.getElementById('add-project-model');
        model.classList.remove('hidden');
    }

    // Adds a error msg in the Project model
    static createProjectNameErrorMsg (name) {
        const span = document.querySelector('.project-name-error-msg');
        span.textContent = `${name} project has already been made.`;
    }

    // Removes error msg
    static removeErrorMsg() {
        const span = document.querySelector('.project-name-error-msg');
        span.textContent = '';
    }

    // Closes the project model
    static closeAddProjectModel() {
        const model = document.getElementById('add-project-model');
        model.classList.add('hidden');
        UI.removeErrorMsg();
    }

    // Creates a link to add to the side nav
    static createProjectLink({name, id}) {
        const linkWrapper = document.createElement('span');
        linkWrapper.classList = 'projectLink-wrapper'
        const link = document.createElement('button');
        link.classList = 'nav_link project_link flex-1';
        link.setAttribute('data-id', id)
        link.textContent = name;
        link.addEventListener('click', this.openProject);
        linkWrapper.appendChild(link);
        linkWrapper.appendChild(this.createProjectDelBtn(id))
        return linkWrapper;
    }

    // Creates a button to delete a project
    static createProjectDelBtn(id) {
        const delBtn = document.createElement('span');
        delBtn.classList += 'project-del-btn';
        delBtn.innerHTML = '<i class="fa-regular fa-trash-can delete-icon"></i>';
        delBtn.setAttribute('data-id', id);
        delBtn.addEventListener('click', () => Project.deleteProject(id))
        return delBtn;
    }

    // Creates an option to append in the Task model so users can select in which project the task go
    static createProjectOption({name, id}) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = name;
        return option;
    }

    // Append the Project link and Option in the Html and closes Project model
    static renderProjectsTab () {
        Project.projectsTab.innerHTML = '';
        Task.taskProject.innerHTML = '<option value="">Select a Project</option>'
        const ProjectList = BrowserStorage.getProjectList();
        ProjectList.map(project => {
            Project.projectsTab.appendChild(this.createProjectLink(project));
            Task.taskProject.appendChild(this.createProjectOption(project));
        })
        this.closeAddProjectModel();
    }

    // Opens Project when users clicks a Project link
    static openProject(e) {
        const projectId = e.target.getAttribute('data-id');
        [...document.querySelectorAll('.nav_link')].map(link => link.classList.remove('active'))
        e.target.classList.add('active');
        Project.projectList.map(project => {
            if(project.id === parseInt(projectId)) {
                UI.renderTasks(project);
            }
        })
    }

    static renderProjectTitle(heading) {
        document.getElementById('project-title-wrapper').innerHTML = "";
        const projectHeading = document.createElement('h1');
        projectHeading.textContent = `Project ${heading}.`;
        document.getElementById('project-title-wrapper').appendChild(projectHeading);
    }

    // Gets the tasks and render them
    static renderTasks(project) {
        Task.taskContainer.innerHTML = '';
        document.getElementById('project-title-wrapper').innerHTML = '';
        // Checks if Project has no tasks
        if(project.tasks.length === 0) {
            Task.taskContainer.classList.add('flex-1')
            Task.taskContainer.innerHTML = `
                <div class="no-task-wrapper">
                    <h2>Oops! Looks like <span>${project.name}</span> is empty.</h2>
                </div>
            `
            return;
        }
        Task.taskContainer.classList.remove('flex-1')

        // Gets name of the Project whom tasks will be shown
        const projectName = project.name;
        this.renderProjectTitle(projectName)

        project.tasks.map(currentTask => {

            const {title, desc, deadline, priority} = currentTask;

            const task = document.createElement('div');
            task.classList.add('task');
            task.setAttribute('data-id', project.id)
            // Priority Color top bar
            const priorityBar = document.createElement('span');
            priorityBar.classList += `priority-bar ${priority}`;
            console.log(priority)

            // Task Title
            const taskTitle = document.createElement('h2');
            taskTitle.classList += 'title';
            taskTitle.textContent = title;

            // Time left
            const taskTimeLeft = document.createElement('span');
            taskTimeLeft.classList += 'time-left';
            taskTimeLeft.innerHTML = `<i class="fa-solid fa-stopwatch"></i>&nbsp;${this.getTimeLeft(deadline)}`;

            // Description
            const taskDesc = document.createElement('p');
            taskDesc.classList += 'desc';
            taskDesc.textContent = desc;

            // Due Date
            const taskDueDate = document.createElement('h3');
            taskDueDate.classList += 'time';
            taskDueDate.textContent = `Due date: ${this.getFormattedTime(deadline)}`;

            // Priority
            const taskPriority = document.createElement('h3');
            taskPriority.classList += 'priority';
            taskPriority.innerHTML = `Priority: <span class="color-${priority}">${priority}</span>`;

            // Project
            const taskProject = document.createElement('h3');
            taskProject.classList += 'project';
            taskProject.textContent = `Project: ${projectName}`;

            // Task Actions
            const taskActions = document.createElement('div');
            taskActions.classList += 'task-actions';
            taskActions.innerHTML = `
                <button class="edit-task btn">
                    <i class="fa-sharp fa-solid fa-pen edit-icon"></i>
                    <span>Edit</span>
                </button>
                <button class="delete-task btn">
                    <i class="fa-regular fa-trash-can delete-icon"></i>
                    <span>Delete</span>
                </button>
                <button class="complete-task btn">
                    <i class="fa-solid fa-circle-check complete-icon"></i>
                    Complete
                </button>
            `

            // Appending
            task.appendChild(priorityBar);
            task.appendChild(taskTitle);
            task.appendChild(taskTimeLeft);
            task.appendChild(taskDesc);
            task.appendChild(taskDueDate);
            task.appendChild(taskPriority);
            task.appendChild(taskProject);
            task.appendChild(taskActions);

            Task.taskContainer.appendChild(task);
        })
    }

    // Formats time&date e.g. 21:09 => 11:09 PM && 2022-12-3 => 3 December, 2022
    static getFormattedTime(time) {
        console.log(time);
        const {dueTime, dueDate} = time;
        const year = dueDate.slice(0, 4);
        const month = dueDate.slice(5, 7);
        const day = dueDate.slice(8, 10);
        const date = new Date(year, month, day);
        date.setHours(dueTime.slice(0,2), dueTime.slice(3,5));
        const formattedTime = format(date, 'p');
        const formattedDate = format(date, 'PP');

        return `${formattedTime}, ${formattedDate}`
    }


    static getTimeLeft(time) {
        const {dueTime, dueDate} = time;
        const endYear = dueDate.slice(0, 4);
        const endMonth = dueDate.slice(5, 7);
        const endDay = dueDate.slice(8, 10);
        const endHour = dueTime.slice(0, 2);
        const endMin = dueTime.slice(3, 5);
        const presentDate = new Date();
        const taskDueDate = new Date(endYear, endMonth, endDay);
        taskDueDate.setHours(endHour, endMin);
        const timeLeft = new Date(taskDueDate.getTime() - presentDate.getTime());
        const days = timeLeft.getUTCDate() - 1; // Gives day count of difference
        const hours = timeLeft.getUTCHours(); // Gives hours difference
        const mins = timeLeft.getUTCMinutes(); // gives mins difference

        return `${days === 0 ? "" : `${days} Days,`} 
                ${hours === 0 ? "" : `${hours} Hrs,`} 
                ${mins === 0 ? "" : `${mins} Mins`}`
    }

    static resetTaskContainer() {
        Task.taskContainer.innerHTML = '';
        document.getElementById('project-title-wrapper').innerHTML = '';
    }

}