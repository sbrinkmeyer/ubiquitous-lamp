const { error } = require("console");

const fs = require("fs/promises");
const path = require("path");

async function traverseDirectory(dir, onFile, onFolder) {
    try {
        const items = await fs.readdir(dir, { withFileTypes: true});
        
        for ( const item of items ){
            const fullPath = path.join(dir,item.name);

            if (item.isDirectory()) {
                if (onFolder) onFolder(fullPath);
                // recursively traverser subdirectories
                await traverseDirectory(fullPath, onFile, onFolder);
            } else if (item.isFile()) {
                if (onFile) await onFile(fullPath);
            }
        }
    } catch (error){
        console.error('Error reading directory "${dir}": ', error.messages);
    }    
}

module.exports = {traverseDirectory};