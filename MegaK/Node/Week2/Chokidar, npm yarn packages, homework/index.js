const {watch} = require('chokidar');
const {readFile} = require('fs').promises;

const readThisFile = async (fileName) => {const justRead = await readFile(fileName, 'utf8');
        console.log(`File content: ${justRead}`)};


watch(`${process.argv[2]}`, {awaitWriteFinish: true,
ignoreInitial: true,})
    .on('add', path => {console.log(`File ${path} has been added.`), readThisFile(path)})
    .on('change', path => {console.log(`File ${path} has been changed.`), readThisFile(path)})
    .on('unlink', path => console.log(`File ${path} has been deleted.`));
console.log(process.argv)
