import Project from "./project";
import Task from "./task";

export default class BrowserStorage {

    static setStorage() {
        localStorage.setItem("projectList", JSON.stringify([]));
    }

    static updateStorage() {
        localStorage.setItem("projectList", JSON.stringify(Project.projectList));
    }

    static getProjectList() {
        return JSON.parse(localStorage.getItem("projectList"));
    }

    static setTaskList() {
        localStorage.setItem("taskList", JSON.stringify([]));
    }

    static updateTaskList()  {
        localStorage.setItem("taskList", JSON.stringify(Task.taskList));
    }

    static getTaskList() {
        return JSON.parse(localStorage.getItem("taskList"));
    }
}