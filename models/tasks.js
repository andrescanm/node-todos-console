const Task = require('../models/task');

class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    createTask(description = ''){
        const task = new Task(description);
        this._list[task.id] = task;
    }
}

module.exports = Tasks;