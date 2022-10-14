export default class task {
    static openTaskBModelBtn = document.getElementById('open-task-model-btn');
    static cancelAddTaskBtn = document.getElementById('cancel-add-task-btn');
    static openModel = function openAddTaskModel() {
        const model = document.getElementById('add-task-model');
        model.classList.remove('hidden');
    }
    static closeModel = function closeAddTaskModel() {
        const model = document.getElementById('add-task-model');
        model.classList.add('hidden');
    }
}