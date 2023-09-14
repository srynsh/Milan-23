import dotenv from 'dotenv';
import url from 'url';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

// Get environment variables
dotenv.config();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });



async function main() {
  // Fetch and write leaderboard data
  await fetchDataAndWriteToFile(process.env.LEADERBOARD, 'leaderboard.json');

  // Fetch and write techy data
  await fetchDataAndWriteToFile(process.env.TECHY, 'techy.json');

  // Fetch and write culty data
  await fetchDataAndWriteToFile(process.env.CULTY, 'culty.json');

  // Fetch and write sports boys data
  await fetchDataAndWriteToFile(process.env.SPORTS_BOYS, 'sports_boys.json');

  // Fetch and write sports girls data
  await fetchDataAndWriteToFile(process.env.SPORTS_GIRLS, 'sports_girls.json');
}

// Call the main function to start the data fetching and writing process
main();
