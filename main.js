/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: projects, currentProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentProject\", function() { return currentProject; });\n/* harmony import */ var _todoLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLogic.js */ \"./src/todoLogic.js\");\n/* harmony import */ var _projectLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectLogic.js */ \"./src/projectLogic.js\");\n/* harmony import */ var _projectDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDom.js */ \"./src/projectDom.js\");\n/* harmony import */ var _todoDom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoDom.js */ \"./src/todoDom.js\");\n/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ \"./src/overlay.js\");\n// Set Up Global Variables\n\nconst projects = [];\nconst currentProject = document.getElementById('current-project');\n\n\n\n\n\n\n\nconst addForm = document.getElementById('add-todo');\nconst addProjectText = document.getElementById('add-project');\nconst submitProject = document.getElementById('submit-project');\nconst todoForm = document.getElementById('todo-form');\n\n// DOM logic\n\nObject(_projectDom_js__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"])();\n\n// Render Todo's for clicked Project\n_projectDom_js__WEBPACK_IMPORTED_MODULE_2__[\"projectContainer\"].addEventListener('click', (e) => {\n\n\tif(e.target.id === 'project-container') { return null; }\n\n\tconst deleteBtn = document.createElement('input');\n\tdeleteBtn.className = 'delete';\n\tdeleteBtn.value = 'X';\n\n\tcurrentProject.textContent = e.target.textContent;\n\tcurrentProject.className = e.target.id;\n\tcurrentProject.appendChild(deleteBtn);\n\n\t_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"todoContainer\"].innerHTML = ``;\n\n\tObject(_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"renderTodos\"])();\n\n});\n\n// Remove current Project and its todo's\ncurrentProject.addEventListener('click', (e) => {\n\n\tif(e.target.className !== 'delete') { return null; }\n\n\tconst confirmDelete = prompt(`Are you sure you want to remove the project '${currentProject.textContent}'?`);\n\tlet userAnswer = confirmDelete === null ? null : confirmDelete.toLowerCase();\n\n\tswitch(userAnswer) {\n\t\tcase \"yes\" :\n\t\t\tObject(_projectLogic_js__WEBPACK_IMPORTED_MODULE_1__[\"removeProject\"])(currentProject.className);\n\t\t\t_projectDom_js__WEBPACK_IMPORTED_MODULE_2__[\"projectContainer\"].innerHTML = ``;\n\t\t\tcurrentProject.innerHTML = ``;\n\t\t\t_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"todoContainer\"].innerHTML = ``;\n\t\t\tObject(_projectDom_js__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"])();\n\t\t\tbreak;\n\t\tcase \"no\" :\n\t\t\treturn null;\n\t\t\tbreak;\n\t\tdefault :\n\t\t\treturn null;\t\n\t}\n\n});\n\n//Add Project\nsubmitProject.addEventListener('click', () => {\n\n\tif(addProjectText.value === '') { return null; }\n\n\tconst userInputProject = new _projectLogic_js__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](addProjectText.value);\n\tObject(_projectLogic_js__WEBPACK_IMPORTED_MODULE_1__[\"addProject\"])(userInputProject);\n\t_projectDom_js__WEBPACK_IMPORTED_MODULE_2__[\"projectContainer\"].innerHTML = '';\n\tObject(_projectDom_js__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"])();\n\taddProjectText.value = '';\n\n});\n\n// Add Todo\nconst userTitle = document.getElementById('user-title');\nconst userDescription = document.getElementById('user-description');\nconst userDate = document.getElementById('user-date');\nconst setPriority = document.getElementById('set-priority');\nconst submitTodo = document.getElementById('submit-todo');\n\n\nsubmitTodo.addEventListener('click', () => {\n\n\tif(!currentProject.textContent) {\n\t\talert('Please Select a Project!');\n\t\treturn null;\n\t}\n\t \n\t_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"todoContainer\"].innerHTML = ``;\n\tconst userInputTodo = new _todoLogic_js__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](userTitle.value, userDescription.value, userDate.value, setPriority.checked);\n\tif (setPriority.checked) {\n\t\tuserInputTodo.priority = true;\n\t} else {\n\t\tuserInputTodo.priority = false;\n\t}\n\tconst targetProject = projects.find(function(project){\n\t\treturn project.name === currentProject.textContent;\n\t});\n\ttargetProject.addTodo(userInputTodo);\n\tObject(_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"renderTodos\"])(targetProject);\n\ttodoForm.style.display = 'none';\n\taddForm.style.display = 'grid';\n\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"displayOverlayOff\"])();\n\tuserTitle.value = '';\n\tuserDescription.value = '';\n\tuserDate.value = '';\n\tsetPriority.checked = false;\n\n\n});\n\n// Remove Todo\n_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"todoContainer\"].addEventListener('click', (e) => {\n\n\tif (e.target.className === 'delete-todo') {\n\t\tconst targetProject = projects.find(function(project){\n\t\t\treturn project.name === currentProject.textContent;\n\t\t});\n\n\t\ttargetProject.removeTodo(e.target.parentNode.className);\n\t\t_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"todoContainer\"].innerHTML = ``;\n\t\tObject(_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"renderTodos\"])();\n\t}\n\t\n});\n\n// Popup list for adding todo\naddForm.addEventListener('click', () => {\n\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"displayOverlayOn\"])();\n\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"formFadeIn\"])(todoForm);\n\ttodoForm.style.display = 'grid';\n});\n\n// exit add todo form\nconst exitForm = document.getElementById('exit');\n\nexitForm.addEventListener('click', () => {\n\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"formFadeOut\"])(todoForm);\n\tsetTimeout(function() {\n\t\ttodoForm.style.display = 'none';\n\t\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"displayOverlayOff\"])();\n\t}, 500);\n});\n\n// display todo info\nconst todoInfo = document.getElementById('todo-info');\nconst titleInfo = document.getElementById('title-info');\nconst dateInfo = document.getElementById('due-date');\nconst descInfo = document.getElementById('desc-info');\n\n\n_todoDom_js__WEBPACK_IMPORTED_MODULE_3__[\"todoContainer\"].addEventListener('click', function(e) {\n\n\tif (e.target.className !== 'delete-todo' && e.target.id !== 'todo-container') {\n\t\tconst targetProject = projects.find(function(project){\n\t\t\treturn project.name === currentProject.textContent;\n\t\t});\n\t\tconst targetTodo = targetProject.list.find(function(todo){\n\t\t\treturn todo.title === e.target.textContent;\n\t\t});\n\t\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"formFadeIn\"])(todoInfo);\n\t\ttitleInfo.textContent = targetTodo.title;\n\t\tdateInfo.textContent = targetTodo.dueDate;\n\t\tdescInfo.textContent = targetTodo.description;\n\t\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"displayOverlayOn\"])();\n\t\ttodoInfo.style.display = 'grid';\n\t}\n\n});\n\n// exit todo info popup\nconst exitTodoInfo = document.getElementById('exit-todo-info');\n\nexitTodoInfo.addEventListener('click', () => {\n\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"formFadeOut\"])(todoInfo);\n\tsetTimeout(function() {\n\t\ttodoInfo.style.display = 'none';\n\t\tObject(_overlay_js__WEBPACK_IMPORTED_MODULE_4__[\"displayOverlayOff\"])();\n\t}, 500);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/overlay.js":
/*!************************!*\
  !*** ./src/overlay.js ***!
  \************************/
/*! exports provided: overlay, displayOverlayOn, displayOverlayOff, formFadeIn, formFadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"overlay\", function() { return overlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayOverlayOn\", function() { return displayOverlayOn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayOverlayOff\", function() { return displayOverlayOff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formFadeIn\", function() { return formFadeIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formFadeOut\", function() { return formFadeOut; });\nconst overlay = document.getElementById('overlay');\n\n // Getting Overlay when Todo form is displayed\nfunction displayOverlayOn() {\n\toverlay.style.display = 'block';\n}\n\nfunction displayOverlayOff() {\n\toverlay.style.display = 'none';\n}\n\n// Toggle form animations\nfunction formFadeIn(form) {\n\tform.classList.remove('leave');\n\tform.classList.add('enter');\n}\n\nfunction formFadeOut(form) {\n\tform.classList.remove('enter');\n\tform.classList.add('leave');\n}\n\n//# sourceURL=webpack:///./src/overlay.js?");

/***/ }),

/***/ "./src/projectDom.js":
/*!***************************!*\
  !*** ./src/projectDom.js ***!
  \***************************/
/*! exports provided: projectContainer, renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectContainer\", function() { return projectContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\nconst projectContainer = document.getElementById('project-container');\n\n// Render all Projects\n\nconst renderProjects = () => {\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].forEach((project, id) => {\n\t\tconst title = document.createElement('button');\n\t\ttitle.id = id;\n\t\ttitle.textContent = project.name;\n\t\tprojectContainer.appendChild(title);\n\t});\n}\n\n//# sourceURL=webpack:///./src/projectDom.js?");

/***/ }),

/***/ "./src/projectLogic.js":
/*!*****************************!*\
  !*** ./src/projectLogic.js ***!
  \*****************************/
/*! exports provided: Project, addProject, removeProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n// set up 'class' to create project objects\n\nclass Project {\n\tconstructor(name, list) {\n\t\tthis.name = name;\n\t\tthis.list = [];\n\t}\n}\n\n// Add prototype for all projects to add todo's\n\nProject.prototype.addTodo = function(newTodo) {\n\tthis.list.push(newTodo);\n}\n\n// Add prototype for all projects to remove todo's\n\nProject.prototype.removeTodo = function(todoId) {\n\tthis.list.splice(todoId, 1);\n}\n\n// add a new project to projects array\n\nfunction addProject(projectName) {\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].push(projectName);\n}\n\n// remove project from array with specified index\n\nfunction removeProject(projectId) {\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].splice(projectId, 1);\n}\n\n//# sourceURL=webpack:///./src/projectLogic.js?");

/***/ }),

/***/ "./src/todoDom.js":
/*!************************!*\
  !*** ./src/todoDom.js ***!
  \************************/
/*! exports provided: todoContainer, renderTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoContainer\", function() { return todoContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodos\", function() { return renderTodos; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst todoContainer = document.getElementById('todo-container');\n\n// Render Todo's\nconst renderTodos = (curProject) => {\n\n\tcurProject = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].find(function(project) {\n\t\treturn project.name === _index_js__WEBPACK_IMPORTED_MODULE_0__[\"currentProject\"].textContent;\n\t});\n\n\tcurProject.list.forEach((todo, id) => {\n\t\tconst todoTitle = document.createElement('div');\n\t\ttodoTitle.textContent = todo.title;\n\t\ttodoTitle.className = `todo ${id}`;\n\n\t\tif(todo.priority === true) { \n\t\t\ttodoTitle.classList.add('priority');\n\t\t}\n\n\t\tconst deleteTodo = document.createElement('input');\n\t\tdeleteTodo.className = `delete-todo`;\n\t\tdeleteTodo.value = 'X';\n\n\t\ttodoTitle.appendChild(deleteTodo);\n\t\ttodoContainer.appendChild(todoTitle);\n\t});\n\n}\n\n//# sourceURL=webpack:///./src/todoDom.js?");

/***/ }),

/***/ "./src/todoLogic.js":
/*!**************************!*\
  !*** ./src/todoLogic.js ***!
  \**************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n// set up 'class' to create todo objects\n\nclass Todo {\n\tconstructor(title, description, dueDate, priority, complete) {\n\t\tthis.title = title;\n\t\tthis.description = description;\n\t\tthis.dueDate = dueDate;\n\t\tthis.priority = false;\n\t\tthis.complete = false;\n\t}\n}\n\n//# sourceURL=webpack:///./src/todoLogic.js?");

/***/ })

/******/ });