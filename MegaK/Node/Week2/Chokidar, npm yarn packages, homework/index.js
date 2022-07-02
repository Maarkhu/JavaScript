const {watch} = require('chokidar');
const {readFile} = require('fs');

watch(`${process.argv[2]}`, {awaitWriteFinish: true,
ignoreInitial: true,})
    .on('add', path => console.log(`File ${path} has been added.`))
    .on('change', path => console.log(`File ${path} has been changed.`, readFile(`${path}`, 'utf8', (err, data) => {
        console.log(`File content:${data}`)})))
    .on('unlink', path => console.log(`File ${path} has been deleted.`));
console.log(process.argv)
