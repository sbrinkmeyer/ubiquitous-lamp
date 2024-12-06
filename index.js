require("dotenv").config();

const {traverseDirectory} = require("./src/traversal");

const MOVIE_DIR = process.env.MOVIE_DIR;

// verify the required
if (!MOVIE_DIR){
    console.error("missing required environment var: MOVIE_DIR");
    process.exit(1);
}

// test output
console.log("movies path: ", MOVIE_DIR);

(async function main() {
    console.log('starting directory traverse for: ${MOVIE_DIR}');
    await traverseDirectory(
        MOVIE_DIR,
        (filePath) => console.log("📄 File:", filePath),
        (folderPath) => console.log("\uD83D\uDCC1 Folder: ", folderPath)
    );
    console.log("finished directory traversal");
})();
