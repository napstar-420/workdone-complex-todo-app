import Project from "./project";
import BrowserStorage from "./Storage";
import UI from "./UI";

export default class Task {

    static openTaskBModelBtn = document.getElementById('open-task-model-btn');
    static addTaskBtn = document.getElementById('add-task-btn');
    static cancelAddTaskBtn = document.getElementById('cancel-add-task-btn');
    static taskTitle = document.getElementById('task-title');
    static taskDesc = document.getElementById('task-desc');
    static taskDueDate = document.getElementById('task-due-date');
    static taskDueTime = document.getElementById('task-due-time');
    static taskPriority = document.getElementById('task-priority');
    static taskProject = document.getElementById('task-project');
    static taskContainer = document.getElementById('task-container')

    static createTask(e) {
        const task = new Task(
            Task.taskTitle.value, 
            Task.taskDesc.value, 
            Task.taskDueDate.value,
            Task.taskDueTime.value, 
            Task.taskPriority.value,
            Task.taskProject.value
        )
        console.log(task)
        Task.addTask(task);
    }

    static addTask = function forwardTaskToProjectList(task) {
        console.log(Project.projectList)
        Project.projectList[task.projectId].tasks.unshift(task);
        BrowserStorage.updateStorage();
        Project.projectList.map(project => {
            if(project.id === parseInt(task.projectId)) {
                UI.renderTasks(project);
            }
        })
        UI.closeAddTaskModel();
    }

    constructor(title, desc, dueDate, dueTime, priority, projectId) {
        this.title = title;
        this.desc = desc;
        this.deadline = {
            dueTime,
            dueDate,
        },
        this.priority = priority,
        this.projectId = projectId
    }
}