const { readdir, stat, readFile } = require('fs').promises;

const showFilesInDir = async (path) => {
  const list = await readdir(path);
  for (const element of list) {
    const elementPath = `${path}/${element}`;
    const elementStats = await stat(elementPath);
    console.log('Element', elementPath, elementStats.isDirectory());

    if (elementStats.isFile()) {
      const elementContent = await readFile(elementPath, 'utf8');
      console.log('File content', elementPath, elementContent);
    } else if (elementStats.isDirectory()) {
      await showFilesInDir(elementPath);
    }
  }
};

showFilesInDir('./a');
