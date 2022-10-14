/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\nclass UI {\r\n    static openAddTaskModel () {\r\n        const model = document.getElementById('add-task-model');\r\n        model.classList.remove('hidden');\r\n    }\r\n    static closeAddTaskModel () {\r\n        const model = document.getElementById('add-task-model');\r\n        model.classList.add('hidden');\r\n    }\r\n    static openAddProjectModel () {\r\n        const model = document.getElementById('add-project-model');\r\n        model.classList.remove('hidden');\r\n    }\r\n\r\n    static createProjectNameErrorMsg (name) {\r\n        const span = document.querySelector('.project-name-error-msg');\r\n        span.textContent = `${name} project has already been made.`;\r\n    }\r\n\r\n    static closeAddProjectModel() {\r\n        const model = document.getElementById('add-project-model');\r\n        model.classList.add('hidden');\r\n        const span = document.querySelector('.project-name-error-msg');\r\n        span.textContent = '';\r\n    }\r\n\r\n\r\n    static addProjectToUI (projectsTab, project) {\r\n        // Adds the Project nav link to side nav\r\n        const projectLink = document.createElement('button');\r\n        projectLink.classList.add('nav_link');\r\n        projectLink.textContent = project.name;\r\n        projectsTab.appendChild(projectLink);\r\n        // Adds the Project option in the Add task model select\r\n        const projectOption = document.createElement('option');\r\n        projectOption.value = project.id;\r\n        projectOption.textContent = project.name;\r\n        _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].taskProject.appendChild(projectOption);\r\n        // Closes the Add Project Model\r\n        this.closeAddProjectModel()\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://todo-app/./src/UI.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\nclass Project {\r\n    static projectList = [];\r\n    static openProjectModelBtn = document.getElementById(\r\n        \"open-project-model-btn\"\r\n    );\r\n    static createProjectBtn = document.getElementById(\"add-project-btn\");\r\n    static cancelAddProjectBtn = document.getElementById(\r\n        \"cancel-add-project-btn\"\r\n    );\r\n    static projectsTab = document.getElementById(\"projects-tab\");\r\n    static projectName = document.getElementById(\"project-title\");\r\n\r\n    static addProject = function addProjectToProductList(project, list) {\r\n        list.push(project);\r\n    };\r\n\r\n    static createProject = function createProjectAndUpdateUI(e) {\r\n        e.preventDefault();\r\n        const projectName = Project.projectName.value;\r\n        if (Project.checkProject(projectName) !== false) {\r\n            const project= new Project(projectName);\r\n            Project.addProject(project, Project.projectList);\r\n            _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectToUI(Project.projectsTab, project);\r\n            Project.projectName.value = \"\";\r\n        }\r\n    };\r\n\r\n    static checkProject = function checkIfProjectAlreadyExistAndNameIsValid(name) {\r\n        let newProjectName = name;\r\n        newProjectName = newProjectName.trim();\r\n        if (newProjectName !== \"\") {\r\n            for(const project of Project.projectList) {\r\n                if(project.name === newProjectName) {\r\n                    _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProjectNameErrorMsg(newProjectName);\r\n                    return false;\r\n                }\r\n            }\r\n            return true\r\n        }\r\n        return false;\r\n    };\r\n\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.id = Project.projectList.length;\r\n        this.tasks = [];\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\n\r\nclass Task {\r\n    static openTaskBModelBtn = document.getElementById('open-task-model-btn');\r\n    static addTaskBtn = document.getElementById('add-task-btn');\r\n    static cancelAddTaskBtn = document.getElementById('cancel-add-task-btn');\r\n    static taskTitle = document.getElementById('task-title');\r\n    static taskDesc = document.getElementById('task-desc');\r\n    static taskDueDate = document.getElementById('task-due-time');\r\n    static taskDueTime = document.getElementById('task-due-date');\r\n    static taskPriority = document.getElementById('task-priority');\r\n    static taskProject = document.getElementById('task-project');\r\n\r\n    static createTask(e) {\r\n        e.preventDefault();\r\n        const task = new Task(\r\n            Task.taskTitle.value, \r\n            Task.taskDesc.value, \r\n            Task.taskDueDate.value, \r\n            Task.taskDueTime.value, \r\n            Task.taskPriority.value,\r\n            Task.taskProject.value\r\n        )\r\n        Task.addTask(task);\r\n    }\r\n\r\n    static addTask = function forwardTaskToProjectList(task) {\r\n        _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList[Task.taskProject.value].addTask(task);\r\n        console.log(_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList[Task.taskProject.value])\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeAddTaskModel();\r\n    }\r\n\r\n    constructor(title, desc, dueDate, dueTime, priority, projectId) {\r\n        this.title = title;\r\n        this.desc = desc;\r\n        this.deadline = {\r\n            dueTime,\r\n            dueDate\r\n        },\r\n        this.priority = priority,\r\n        this.projectId = projectId\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-app/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/task.js");
/******/ 	
/******/ })()
;