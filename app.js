require('colors');

const { inquirerMenu, pauseMenu, readInput, listTaskToDelete, confirmDelete, showCheckList } = require('./inquirer');
const { saveData, readFile } = require('./helpers/savedata');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';
    const tasks = new Tasks();

    const tasksFromDB = readFile();

    if (tasksFromDB) tasks.setTasksFromArray(tasksFromDB);

    do {
        console.clear();
        option = await inquirerMenu();
        switch (option) {
            case '1':
                const description = await readInput('Description: ');
                tasks.createTask(description);
                break;
            case '2':
                tasks.getAll();
                break;
            case '3':
                tasks.getCompletedTasks();
                break;
            case '4':
                tasks.getPendingTasks();
                break;
            case '5':
                const ids = await showCheckList(tasks.listTasksAsArray);
                tasks.toggleCompletedTask(ids);
                break;
            case '6':
                const taskToDelete = await listTaskToDelete(tasks.listTasksAsArray);
                if (taskToDelete !== '0'){
                    const yesDoIt = await confirmDelete('Are you sure to delete this task?');
                    if(yesDoIt){
                        tasks.deleteTask(taskToDelete);
                        console.log('Task deleted!');
                    }
                }
                break;
        }

        saveData(tasks.listTasksAsArray);

        if (option !== 0) await pauseMenu();

    } while (option !== '0');
}

main();