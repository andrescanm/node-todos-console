require('colors');
const { inquirerMenu, pauseMenu, readInput } = require('./inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';
    const tasks = new Tasks();
    do {
        option = await inquirerMenu();
        switch (option) {
            case '1':
                const description = await readInput('Description: ');
                tasks.createTask(description);
                break;
            case '2':
                console.log(tasks._list);
                break;
        }
        if (option !== 0) await pauseMenu();
    } while (option !== '0');
}

main();