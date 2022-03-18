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

    setTasksFromArray(tasks = []) {
        JSON.parse(tasks).forEach(task => this._list[task.id] = task);
    }

    get listTasksAsArray() {
        const listArray = [];
        Object.keys(this._list).forEach((key) => {
            const task = this._list[key];
            listArray.push(task);
        })
        return listArray;
    }

    getAll() {
        this.listTasksAsArray.forEach((task, index) => {
            const id = `${index + 1}`.green;
            const { description, completedAt } = task;
            const state = (completedAt) ? 'Complete'.green : 'Pending'.red;
            console.log(`${id} ${description} :: ${state}`);
        });
    }

    getCompletedTasks() {
        this.listTasksAsArray.filter(task => task.completedAt !== null).forEach((task, index) => {
            const id = `${index + 1}`.green;
            const { description } = task;
            const state = 'Complete'.green;
            console.log(`${id} ${description} :: ${state}`);
        });
    }

    getPendingTasks() {
        this.listTasksAsArray.filter(task => task.completedAt === null).forEach((task, index) => {
            const id = `${index + 1}`.green;
            const { description } = task;
            const state = 'Pending'.red;
            console.log(`${id} ${description} :: ${state}`);
        });
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

}

module.exports = Tasks;