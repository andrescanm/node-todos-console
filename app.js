require('colors');

const { showMenu, pause } = require('./helpers/messages');

const main = async () => {
    let option = '';
    do {
        option = await showMenu();
        console.log({ option });
        if (option !== '0') await pause();
    } while (option !== '0');
}

main();