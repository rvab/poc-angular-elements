const fs = require('fs');
const path = require('path');

function concatBuildFiles(distPath, writePath) {
  const jsFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.js'));
  const cssFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.css'));

  let jsFileData = '';
  let cssFileData = '';

  for (const file of jsFiles) {
    jsFileData += fs.readFileSync(`${distPath}/${file}`);
  }

  for (const file of cssFiles) {
    cssFileData += fs.readFileSync(`${distPath}/${file}`);
  }

  fs.writeFileSync(`${writePath}/ng.min.js`, jsFileData);
  fs.writeFileSync(`${writePath}/ng.min.css`, cssFileData);
}


function copyAssetFiles(source, destination) {
  const exists = fs.existsSync(source);
  const stats = exists && fs.lstatSync(source);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
    const files = fs.readdirSync(source);
    for (const file of files) {
      copyAssetFiles(path.join(source, file), path.join(destination, file));
    }
  } else {
    fs.copyFileSync(source, destination);
  }
}

function createFinalBuildFiles() {

  let distPath = `../public/angular`;
  let writePath = `../public/app1`;

  copyAssetFiles(`${distPath}/assets`, `${writePath}/ng-assets`);
  concatBuildFiles(distPath, writePath);
}


createFinalBuildFiles();
