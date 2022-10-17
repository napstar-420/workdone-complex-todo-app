import Project from "./project";

export default class BrowserStorage {

    static setStorage() {
        localStorage.setItem('projectList', JSON.stringify([]))
    }

    static updateStorage() {
        localStorage.setItem('projectList', JSON.stringify(Project.projectList))
    }

    static getProjectList() {
        return JSON.parse(localStorage.getItem('projectList'))
    }
}