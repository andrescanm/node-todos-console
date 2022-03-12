const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'optionInquirer',
        message: 'What do you want?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create Task`
            },
            {
                value: '2',
                name: `${'2.'.green} List Tasks`
            },
            {
                value: '3',
                name: `${'3.'.green} List Completed Tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} List Pending Tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete Task`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete Task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            },
        ]
    }
];

const pauseInquierer = [
    {
        type: 'input',
        name: 'pause',
        message: `Please press ${'ENTER'.green} to continue...\n`
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('========================'.green);
    console.log('    Select an Option');
    console.log('========================\n'.green);

    const { optionInquirer } = await inquirer.prompt(questions);
    return optionInquirer;
}

const pauseMenu = async () => {
    const { pause } = await inquirer.prompt(pauseInquierer);
    return pause;
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'No value input.';
                }
                return true;
            }
        }
    ];

    const {description} = await inquirer.prompt(question);
    return description;
}

module.exports = { inquirerMenu, pauseMenu, readInput }