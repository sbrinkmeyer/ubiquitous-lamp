require("dotenv").config();

const {traverseDirectory} = require("./src/traversal");
const {getVidProps} = require("./src/vidprops");

const movieRoot = process.env.MOVIE_DIR;

// verify the required
if (!movieRoot){
    console.error("missing required environment var: MOVIE_DIR");
    process.exit(1);
}

async function processFile(filePath) {
    try {
        if(filePath.endsWith('.mp4') || filePath.endsWith('.mkv')) {
            console.log(`📄 Analyzing: ${filePath}`);
            const details = await getVidProps(filePath);
            console.log(`✅ Details for ${filePath}: `, details);
        }
    } catch (error) {
        console.error(`❌ Failed to analyze ${filePath}: `, error.message);
    }
    
}

(async function main() {
    console.log(`starting directory traverse for: ${movieRoot}`);
    await traverseDirectory(
        movieRoot,
        (filePath) => processFile(filePath),
        (folderPath) => console.log("📁 Folder: ", folderPath)
    );
    console.log("finished directory traversal");
})();
