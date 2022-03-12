require('colors');

const showMenu = () => {
    console.clear();
    return new Promise((resolve, reject) => {
        console.log('========================'.green);
        console.log('    Select an Option');
        console.log('========================\n'.green);
        console.log(`${'1'.green}. Create Task`);
        console.log(`${'2'.green}. List Tasks`);
        console.log(`${'3'.green}. List Completed Tasks`);
        console.log(`${'4'.green}. List Pending Tasks`);
        console.log(`${'5'.green}. Complete Task`);
        console.log(`${'6'.green}. Delete Task`);
        console.log(`${'0'.green}. Exit`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`Select your option:\n`, (option) => {
            readLine.close();
            resolve(option);
        });
    });
}

const pause = () => {
    return new Promise((resolve, reject) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`Press ${'ENTER'.blue} to continue...\n`, (option) => {
            readLine.close();
            resolve();
        });
    });
}

module.exports = { showMenu, pause }