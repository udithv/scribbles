/*const writeJsonFile = require('write-json-file');
 
(async () => {
    await writeJsonFile('foo.json', {foo: false});
})();*/

// const { homedir } = require('os')
const pathToDir = './hidefilefolder';

/*const { isWindows, isLinux, isMac } = require('is-os');

console.log(`OS WINDOWS: ${isWindows()}`);
console.log(`OS MAC: ${isMac()}`);
console.log(`OS LINUX: ${isLinux()}`);*/
const path = require('path');
const fse = require('fs-extra');
const { spawn, exec } = require('child_process');
const hideFile = require('hidefile');
//mkdirp.sync(pathtoDir);
//fse.mkdirSync(pathToDir);
//exec(`attrib +h ${path.resolve(pathToDir)}`)
fse.mkdir(pathToDir, (err) => {
    if(err) { console.error(err);}
    const newpath = hideFile.hideSync(pathToDir)
    console.log(newpath)
})
