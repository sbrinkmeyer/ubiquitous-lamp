require("dotenv").config();

const fs = require("fs/promises");
const path = require("path");
const axios = require("axios");

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const MOVIE_DIR = process.env.MOVIE_DIR;

// verify the required
if (!TMDB_API_KEY || !TMDB_BASE_URL || !MOVIE_DIR){
    console.error("missing required environment vars.");
    process.exit(1);
}

// test output
console.log("TMDb API Key: ", TMDB_API_KEY);
console.log("TMDb Base Url: ", TMDB_BASE_URL);
console.log("movies path: ", MOVIE_DIR);

(async function main() {
    try{
        console.log("project setup complete");
    } catch (error) {
        console.error("error occurred: ", error.message);
    }
})();
