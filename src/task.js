export default class Task {
    static openTaskBModelBtn = document.getElementById('open-task-model-btn');
    static addTaskBtn = document.getElementById('add-task-btn');
    static cancelAddTaskBtn = document.getElementById('cancel-add-task-btn');
    static taskTitle = document.getElementById('task-title');
    static taskDesc = document.getElementById('task-desc');
    static taskDueDate = document.getElementById('task-due-time');
    static taskDueTime = document.getElementById('task-due-date');
    static taskPriority = document.getElementById('task-priority');
    static taskProject = document.getElementById('task-project');
    static createTask = function createTask(title, desc, dueDate, priority, project) {
        return {title, desc, dueDate, priority, project}
    }
    static addTask = function addTaskToProject(projectName, task) {
        projectName.tasks.push(task);
    }
}