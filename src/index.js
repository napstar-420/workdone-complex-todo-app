import './style.css';
import Task from './task';
import UI from './UI';
import Project from './project'

Task.openTaskBModelBtn.addEventListener('click', UI.openAddTaskModel);
Task.cancelAddTaskBtn.addEventListener('click', UI.closeAddTaskModel);
Task.addTaskBtn.addEventListener('click', Task.createTask)
Project.openProjectModelBtn.addEventListener('click', UI.openAddProjectModel);
Project.cancelAddProjectBtn.addEventListener('click', UI.closeAddProjectModel);
Project.createProjectBtn.addEventListener('click', Project.createProject);