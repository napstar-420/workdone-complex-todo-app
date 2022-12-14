import Project from "./project";
import Task from "./task";
import BrowserStorage from "./Storage";
import { format } from "date-fns";
import { differenceInDays } from "date-fns";

export default class UI {
  // Opens the model to create a new Task
  static openAddTaskModel() {
    const model = document.getElementById("add-task-model");
    model.classList.remove("hidden");
  }

  // Close the model to create a new Task
  static closeAddTaskModel() {
    const model = document.getElementById("add-task-model");
    model.classList.add("hidden");
  }

  // Opens the model to create new project
  static openAddProjectModel() {
    const model = document.getElementById("add-project-model");
    model.classList.remove("hidden");
  }

  // Adds a error msg in the Project model
  static createProjectNameErrorMsg(name) {
    const span = document.querySelector(".project-name-error-msg");
    span.textContent = `${name} project has already been made.`;
  }

  // Removes error msg
  static removeErrorMsg() {
    const span = document.querySelector(".project-name-error-msg");
    span.textContent = "";
  }

  // Closes the project model
  static closeAddProjectModel() {
    const model = document.getElementById("add-project-model");
    model.classList.add("hidden");
    UI.removeErrorMsg();
  }

  // Creates a link to add to the side nav (Projects tab)
  static createProjectLink({ name, id }) {
    const linkWrapper = document.createElement("span");
    linkWrapper.classList = "projectLink-wrapper";
    const link = document.createElement("button");
    link.classList = "nav_link project_link flex-1";
    link.setAttribute("data-projectId", id);
    link.textContent = name;
    link.addEventListener("click", () => Project.openProject(id));
    linkWrapper.appendChild(link);
    linkWrapper.appendChild(this.createProjectDelBtn(id));
    return linkWrapper;
  }

  // Creates a button to delete a project
  static createProjectDelBtn(id) {
    const delBtn = document.createElement("span");
    delBtn.classList += "project-del-btn";
    delBtn.innerHTML = '<i class="fa-regular fa-trash-can delete-icon"></i>';
    delBtn.setAttribute("data-projectId", id);
    delBtn.addEventListener("click", () => Project.deleteProject(id));
    return delBtn;
  }

  // Creates an option to append in the Task model so users can select in which project the task go
  static createProjectOption({ name, id }) {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    return option;
  }

  // Append the Project link and Option in the Html and closes Project model
  static renderProjectsTab() {
    Project.projectsTab.innerHTML = "";
    Task.taskProject.innerHTML = '<option value="">Select a Project</option>';
    const ProjectList = BrowserStorage.getProjectList();
    ProjectList.map((project) => {
      Project.projectsTab.appendChild(this.createProjectLink(project));
      Task.taskProject.appendChild(this.createProjectOption(project));
    });
    this.closeAddProjectModel();
  }

  static renderProjectTitle(heading) {
    document.getElementById("project-title-wrapper").innerHTML = "";
    const projectHeading = document.createElement("h1");
    projectHeading.textContent = `${heading}.`;
    document
      .getElementById("project-title-wrapper")
      .appendChild(projectHeading);
  }

  // Gets the tasks and render them
  static renderProjectTasks(project) {
    this.resetTaskContainer();
    // Checks if Project has no tasks
    if (project.tasks.length === 0) {
      Task.taskContainer.classList.add("flex-1");
      Task.taskContainer.innerHTML = `
                <div class="no-task-wrapper">
                    <h2>Oops! Looks like <span>${project.name}</span> is empty.</h2>
                </div>
            `;
      return;
    }
    // Remove the class "flex-1" so the taskContainer will only take required height
    Task.taskContainer.classList.remove("flex-1");

    // Gets name of the Project whom tasks will be shown
    const projectName = project.name;
    this.renderProjectTitle(projectName);

    // Here the Rendering start
    project.tasks.map((currentTask) => {
      const task = this.createTaskUiElement(currentTask);
      Task.taskContainer.appendChild(task);
    });
  }

  static createTaskUiElement(currentTask, renderType = "Project") {
    const { title, desc, deadline, priority, projectId, taskId } = currentTask;

    const project = Project.getProject(projectId);

    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("id", `prj-${projectId}_tsk-${taskId}`);
    task.setAttribute("data-ProjectId", projectId);
    task.setAttribute("data-taskId", taskId);

    // Priority Color top bar
    const priorityBar = document.createElement("span");
    priorityBar.classList += `priority-bar ${priority}`;

    // Task Title
    const taskTitle = document.createElement("h2");
    taskTitle.classList += "title";
    taskTitle.textContent = title;

    // Time left
    const taskTimeLeft = document.createElement("span");
    taskTimeLeft.classList += "time-left";
    taskTimeLeft.innerHTML = `<i class="fa-solid fa-stopwatch"></i>&nbsp;${this.getTimeLeft(
      deadline
    )}`;

    // Description
    const taskDesc = document.createElement("p");
    taskDesc.classList += "desc";
    taskDesc.textContent = desc;

    // Due Date
    const taskDueDate = document.createElement("h3");
    taskDueDate.classList += "time";
    taskDueDate.textContent = `Due date: ${this.getFormattedTime(deadline)}`;

    // Priority
    const taskPriority = document.createElement("h3");
    taskPriority.classList += "priority";
    taskPriority.innerHTML = `Priority: <span class="color-${priority}">${priority}</span>`;

    // Project
    const taskProject = document.createElement("h3");
    taskProject.classList += "project";
    taskProject.textContent = `Project: ${project.name}`;

    // Task Actions
    const taskActions = document.createElement("div");
    taskActions.classList += "task-actions";

    const editTaskBtn = document.createElement("button");
    editTaskBtn.classList += "edit-task btn";
    editTaskBtn.setAttribute("id", "open-edit-task-model");
    editTaskBtn.innerHTML =
      '<i class="fa-sharp fa-solid fa-pen edit-icon"></i><span>Edit</span>';
    editTaskBtn.addEventListener("click", () =>
      this.openEditTaskModel(projectId, taskId, renderType)
    );

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList += "delete-task btn";
    deleteTaskBtn.setAttribute("id", "delete-task-btn");
    deleteTaskBtn.innerHTML =
      '<i class="fa-regular fa-trash-can delete-icon"></i><span>Delete</span>';
    deleteTaskBtn.addEventListener("click", () =>
      Task.deleteTask(projectId, taskId, renderType)
    );

    const completeTaskBtn = document.createElement("button");
    completeTaskBtn.classList += "complete-task btn";
    completeTaskBtn.setAttribute("id", "complete-task-btn");
    completeTaskBtn.innerHTML =
      '<i class="fa-solid fa-circle-check complete-icon"></i><span>Complete</span>';
    completeTaskBtn.addEventListener("click", () =>
      Task.completeTask(projectId, taskId, renderType)
    );

    taskActions.appendChild(editTaskBtn);
    taskActions.appendChild(deleteTaskBtn);
    taskActions.appendChild(completeTaskBtn);

    // Appending
    task.appendChild(priorityBar);
    task.appendChild(taskTitle);
    task.appendChild(taskTimeLeft);
    task.appendChild(taskDesc);
    task.appendChild(taskDueDate);
    task.appendChild(taskPriority);
    task.appendChild(taskProject);
    task.appendChild(taskActions);

    return task;
  }

  // Formats time&date e.g. 21:09 => 11:09 PM && 2022-12-3 => 3 December, 2022
  static getFormattedTime(time) {
    const { dueTime, dueDate } = time;
    const date = new Date(dueDate);
    date.setHours(dueTime.slice(0, 2), dueTime.slice(3, 5));
    const formattedTime = format(date, "p");
    const formattedDate = format(date, "PP");

    return `${formattedTime}, ${formattedDate}`;
  }

  static getTimeLeft(time) {
    const { dueTime, dueDate } = time;
    const endHour = dueTime.slice(0, 2);
    const endMin = dueTime.slice(3, 5);
    const presentDate = new Date();
    const taskDueDate = new Date(dueDate);
    taskDueDate.setHours(endHour, endMin);
    const timeLeft = new Date(taskDueDate.getTime() - presentDate.getTime());
    const days = timeLeft.getUTCDate() - 1; // Gives day count of difference
    const hours = timeLeft.getUTCHours(); // Gives hours difference
    const mins = timeLeft.getUTCMinutes(); // gives mins difference

    return `${days === 0 ? "" : `${days} Days,`} 
                ${hours === 0 ? "" : `${hours} Hrs,`} 
                ${mins === 0 ? "" : `${mins} Mins`}`;
  }

  static resetTaskContainer() {
    Task.taskContainer.innerHTML = "";
    document.getElementById("project-title-wrapper").innerHTML = "";
  }

  static openEditTaskModel(projectId, taskId, renderType) {
    const project = Project.getProject(projectId);
    const { name, tasks } = project;

    let task = {};
    tasks.map((currentTask) =>
      currentTask.taskId === taskId ? (task = currentTask) : ""
    );

    const editTaskModel = document.createElement("div");
    editTaskModel.classList += "model";
    editTaskModel.setAttribute("id", "edit-task-model");
    editTaskModel.innerHTML = `
        <form action="" onSubmit="return false" onReset="return false" class="add-task-form" id="edit-task-form">
          <span>
            <h2>Edit Task</h2>
          </span>
          <span>
            <label for="task-title" class="label">New Title*</label>
            <input
              class="form-control"
              type="text"
              id="new-task-title"
              name="task-title"
              value="${task.title}"
              placeholder="Meeting with John"
              required
              autocomplete="off"
            />
          </span>
          <span>
            <label for="task-desc" class="label">New Description*</label>
            <textarea
              class="form-control"
              placeholder="John will wait at the society park."
              style="resize: none"
              name="task-desc"
              id="new-task-desc"
              cols="30"
              rows="5"
              required
              autocomplete="off"
            >${task.desc}</textarea>
          </span>
          <span class="due-date-span">
            <label for="task-due-date" class="label">New Due Date*</label>
            <span>
              <input
                class="form-control"
                type="time"
                name="task-due-time"
                id="new-task-due-time"
                value="${task.deadline.dueTime}"
              />
              <input
                class="form-control"
                type="date"
                name="task-due-date"
                id="new-task-due-date"
                value="${task.deadline.dueDate}"
                required
              />
            </span>
          </span>
          <span class="priority-span">
            <label for="task-priority" class="label">Priority</label>
            <select name="task-priority" class="form-control" id="new-task-priority">
              <option value="low" class="color-low" ${
                task.priority === "low" ? "selected" : ""
              }>Low</option>
              <option value="medium" class="color-medium" ${
                task.priority === "medium" ? "selected" : ""
              }>Medium</option>
              <option value="high" class="color-high" ${
                task.priority === "high" ? "selected" : ""
              }>High</option>
            </select>
          </span>
          <span class="project-span">
            <label for="task-project" class="label">Project</label>
            <select
              class="form-control"
              name="task-project"
              id="task-project"
              disabled
              required
            >
              <option value="${task.projectId}">
                ${name}
              </option>
            </select>
          </span>
          <button type="submit" id="edit-task-btn" class="btn add-btn">
            Edit Task
          </button>
          <button type="reset" id="cancel-edit-task-btn" class="btn cancel-btn">
            Cancel
          </button>
        </form>`;

    document.body.appendChild(editTaskModel);
    document
      .getElementById("edit-task-btn")
      .addEventListener("click", () =>
        Task.editTask(projectId, taskId, renderType)
      );
    document
      .getElementById("cancel-edit-task-btn")
      .addEventListener("click", this.closeEditTaskModel);
  }

  static closeEditTaskModel() {
    const editTaskModel = document.getElementById("edit-task-model");
    document.body.removeChild(editTaskModel);
  }

  static renderTasks(type) {
    [...document.querySelectorAll(".nav_link")].map((link) =>
      link.classList.remove("active")
    );
    UI.resetTaskContainer();
    if (Task.taskList.length === 0) {
      Task.taskContainer.classList.add("flex-1");
      Task.taskContainer.innerHTML = `
                <div class="no-task-wrapper">
                    <h2>Oops! Looks like there are no <span>Tasks</span></h2>
                </div>
            `;
      return;
    }

    Task.taskContainer.classList.remove("flex-1");

    if (type === "ALL_TASKS") {
      this.renderAllTasks();
    }

    if (type === "TODAY_TASKS") {
      this.renderTodayTasks();
    }

    if (type === "WEEK_TASKS") {
      this.renderWeekTasks();
    }
  }

  static renderAllTasks() {
    UI.renderProjectTitle("All tasks");
    document.getElementById("list_all_tasks").classList.add("active");
    Task.taskList.map((currentTask) => {
      const task = UI.createTaskUiElement(currentTask, "ALL_TASKS");
      Task.taskContainer.appendChild(task);
    });
  }

  static renderTodayTasks() {
    UI.renderProjectTitle("Today tasks");
    document.getElementById("list_today_tasks").classList.add("active");
    let isEmpty = true;

    Task.taskList.map((currentTask) => {
      const taskDate = currentTask.deadline.dueDate;
      const presentDate = new Date().getDate();
      console.log(taskDate.slice(-2));
      if (parseInt(taskDate.slice(-2)) == presentDate) {
        const task = UI.createTaskUiElement(currentTask, "TODAY_TASKS");
        Task.taskContainer.appendChild(task);
        isEmpty = false;
      }
    });

    if (isEmpty) {
      Task.taskContainer.classList.add("flex-1");
      Task.taskContainer.innerHTML = `
                <div class="no-task-wrapper">
                    <h2>Oops! Looks like there are no <span>Tasks</span></h2>
                </div>`;
    }
  }

  static renderWeekTasks() {
    let isEmpty = true;
    UI.renderProjectTitle("Week tasks");
    document.getElementById("list_week_tasks").classList.add("active");

    Task.taskList.map((currentTask) => {
      const { dueDate } = currentTask.deadline;
      const presentDate = new Date();
      const taskDueDate = new Date(dueDate);
      const difference = differenceInDays(taskDueDate, presentDate);

      if (difference < 7) {
        const task = UI.createTaskUiElement(currentTask, "WEEK_TASKS");
        Task.taskContainer.appendChild(task);
        isEmpty = false;
      }
    });

    if (isEmpty) {
      Task.taskContainer.classList.add("flex-1");
      Task.taskContainer.innerHTML = `
                <div class="no-task-wrapper">
                    <h2>Oops! Looks like there are no <span>Tasks</span></h2>
                </div>`;
    }
  }
}

const expandNavBtn = document.getElementById("expand_nav");
expandNavBtn.addEventListener("click", expandNav);
let isNavShowing = false;

function expandNav() {
  if (isNavShowing === false) {
    document.querySelector(".projects-tab-container").style.display = "flex";
    expandNavBtn.innerHTML = `<span class="material-symbols-outlined">
                                    keyboard_double_arrow_down
                                  </span>`;
    isNavShowing = true;
  } else {
    document.querySelector(".projects-tab-container").style.display = "none";
    expandNavBtn.innerHTML = `<span class="material-symbols-outlined">
        keyboard_double_arrow_up
    </span>`;
    isNavShowing = false;
  }
}

document
  .getElementById("login-btn")
  .addEventListener("click", () =>
    alert("Sorry! we don't support this feature right now.")
  );
document
  .getElementById("sign-up-btn")
  .addEventListener("click", () =>
    alert("Sorry! we don't support this feature right now.")
  );
