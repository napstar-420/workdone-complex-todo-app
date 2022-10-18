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
    static taskContainer = document.getElementById('task-container');

    static taskList = []

    static createTask(e) {
        const task = new Task(
            Task.taskTitle.value, 
            Task.taskDesc.value, 
            Task.taskDueDate.value,
            Task.taskDueTime.value, 
            Task.taskPriority.value,
            Task.taskProject.value
        )
        Task.addTask(task);
    }

    static addTask = function forwardTaskToProjectList(task) {
        Project.projectList[task.projectId].tasks.unshift(task);
        Task.taskList.unshift(task);
        Project.openProject(parseInt(task.projectId));
        BrowserStorage.updateStorage();
        // opens the project
        // Closes the Add task model
        UI.closeAddTaskModel();
    }

    static deleteTask(projectId, taskId) {
        Project.removeTaskFromProjectList(projectId, taskId);
        Task.removeTaskFromTaskList(taskId);
        BrowserStorage.updateStorage();
        Project.projectList.map(project => {
            if(project.id === parseInt(projectId)) {
                UI.renderTasks(project);
            }
        })
    }

    static removeTaskFromTaskList(id) {
        Task.taskList = Task.taskList.filter(task => task.taskId !== id);
    }

    constructor(title, desc, dueDate, dueTime, priority, projectId) {
        this.title = title;
        this.taskId = Task.taskList.length === 0 ? 0 : Task.taskList[0].taskId + 1;
        this.desc = desc;
        this.deadline = {
            dueTime,
            dueDate,
        },
        this.priority = priority,
        this.projectId = projectId
    }
}