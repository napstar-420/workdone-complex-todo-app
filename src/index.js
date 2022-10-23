import "./style.css";
import Task from "./task";
import UI from "./UI";
import Project from "./project";
import BrowserStorage from "./Storage";

document.addEventListener("DOMContentLoaded", () => {

  // Checks if storage is empty
  if (localStorage.length === 0) {
    BrowserStorage.setStorage();
    BrowserStorage.setTaskList();
  }

  // Get data from browser local storage
  Project.projectList = [...BrowserStorage.getProjectList()];
  Task.taskList = [...BrowserStorage.getTaskList()];

  // Even tough we have retrieve our data from browser local storage there is one cache 
  // that the objects has lost their prototypes
  // so we have to reassign the prototypes in order to get all the functionality back

  // Adding prototypes to ProjectList Objects
  for (let i = 0; i < Project.projectList.length; i++) {
    const project = Project.projectList[i];
    for (let j = 0; j < project.tasks.length; j++) {
      const task = project.tasks[j];
      Project.projectList[i].tasks[j] = Object.assign(new Task(), task);
    }
  }

  // Adding prototypes to TaskList Objects
  for (let i = 0; i < Task.taskList.length; i++) {
    const task = Task.taskList[i];
    Task.taskList[i] = Object.assign(new Task(), task);
  }

  // Loads the side project tab and add the projects to addTaskModel select element
  UI.renderProjectsTab();
});

Task.openTaskBModelBtn.addEventListener("click", UI.openAddTaskModel);
Task.cancelAddTaskBtn.addEventListener("click", UI.closeAddTaskModel);
Task.addTaskBtn.addEventListener("click", Task.createTask);
Project.openProjectModelBtn.addEventListener("click", UI.openAddProjectModel);
Project.cancelAddProjectBtn.addEventListener("click", UI.closeAddProjectModel);
Project.createProjectBtn.addEventListener("click", Project.createProject);

document.getElementById("list_today_tasks").addEventListener("click", () => UI.renderTasks("TODAY_TASKS"));
document.getElementById("list_week_tasks").addEventListener("click", () => UI.renderTasks("WEEK_TASKS"));
document.getElementById("list_all_tasks").addEventListener("click", () => UI.renderTasks("ALL_TASKS"));