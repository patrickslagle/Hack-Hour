// Our team has just discovered that search engines are negatively scoring our webpages
// that include a link to the domain shittylistings.com. For simplicity, assume that we have
// 50,000 HTML files in a Unix directory tree, under a folder called “/website” (e.g.
// /website/home.html, /website/san-diego/2505-via-clarita.html, etc). We have 24 hours to
// get a list of file paths to the editorial staff so they can edit the pages and remove the
// links. You need to make a list of the .html files that contain links to the domain. How
// would you solve the problem? Keep in mind our team is on a short deadline.

const fs = require('fs'); 
const path = require('path'); 

/**
 * @description - takes a folder path and a string to be searched for, and will search every file
 * within the directory tree for that string. An array of files with the desired string will be returned
 * @param {string} folderName - folder being searched. Folder must be in same parent folder as this code
 * @param {string} targetDomain - A domain, or any string, that will be searched for in the directory tree
 * @returns {array} - array of files with targetDomain
 */
async function searchFolder(folderName, targetDomain) {
  const filePaths = [];
  const folderPath = path.join(__dirname, folderName); 
  // await for all files/folders that are in this folder 
  const files = await findFolderFiles(folderPath); 
  for (let i = 0; i < files.length; i += 1) {
    // await search of file/folder for targetDomain
    const filesWithTarget = await readFile(path.join(folderName, files[i]), targetDomain);
    filePaths.push(...filesWithTarget)
  }
  return filePaths
}

async function readFile(file, targetDomain) {
  const filePath = path.join(__dirname, file)
  const checkHTML = filePath.slice(filePath.length - 5);
  // Check if file is a folder, if so recurse through it
  // Assumes folder names do not include "."
  if (file.indexOf('.') === -1) {
    return searchFolder(file, targetDomain);
  }
  // if file is html, search for targetDomain
  else if (checkHTML === '.html') {
    return new Promise((resolve, reject) => {
      // if file is HTML, then check for targetDomain
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) reject(err)
        else {
          const checkForTarget = [];
          if (data.indexOf(targetDomain) > -1) {
            checkForTarget.push(filePath)
          }
          resolve(checkForTarget)
        }
      })
    })
  }
}

/**
 * @param {string} folderPath - takes a full path of a folder
 * @returns {array} - array of files/folders directly within folderPath
 */
async function findFolderFiles(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, function(err, files) {
      if (err) reject(err);
      else resolve(files);
    })
  })
}

// example search of folder '/website' for 'shittylistings.com' 
const fun = searchFolder('/website', 'shittylistings.com'); 
fun.then(files => console.log('files with target:', files))
