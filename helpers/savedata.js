const fs = require('fs');

const file = './db/data.json';

const saveData = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

const readFile = () => {
    if (!fs.existsSync(file)) return null;
    return fs.readFileSync(file, { encoding: 'utf-8' });
}

module.exports = { saveData, readFile }