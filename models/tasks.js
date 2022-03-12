const Task = require('../models/task');

class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    createTask(description = '') {
        const task = new Task(description);
        this._list[task.id] = task;
    }

    get listTasksAsArray() {
        const listArray = [];
        Object.keys(this._list).forEach((key) => {
            const task = this._list[key];
            listArray.push(task);
        })
        return listArray;
    }
}

module.exports = Tasks;