require('colors');
const { inquirerMenu, pauseMenu } = require('./inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';
    do {
        option = await inquirerMenu();
        console.log({ option });
        if (option !== 0) await pauseMenu();
    } while (option !== '0');
}

main();