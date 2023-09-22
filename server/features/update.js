import axios from 'axios';
import fs from 'fs';
import path from 'path';
import schedule from 'node-schedule';
import dotenv from 'dotenv';
import url from 'url';

// Load environment variables
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: __dirname + '../.env' });

// Fetch data from url and write to file

async function fetchDataAndWriteToFile(url, fileName) {
    try {
        const response = await axios.get(url);
        const data = response.data;
        
        // Use __dirname to get the current directory of this script (features)
        const scriptDirectory = __dirname;
        
        // Navigate to the "data" directory using path.join
        const filePath = path.join(scriptDirectory, '..', 'data', fileName);
        
        fs.writeFileSync(filePath, JSON.stringify(data));
        console.log(`Data from ${url} has been written to ${filePath}`);
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
    }
}



//update the data folder with new data for every 20 minutes
const updateData = schedule.scheduleJob('*/20 * * * *', async function () {
    // Fetch and write leaderboard data
    console.log('Updating data...');
        // Fetch and write events schedule data
    await fetchDataAndWriteToFile(process.env.EVENTS_SCHEDULE, 'eventsSchedule.json');
    await fetchDataAndWriteToFile(process.env.LEADERBOARD, 'leaderboard.json');

    // Fetch and write techy data
    await fetchDataAndWriteToFile(process.env.TECHY, 'techy.json');

    // Fetch and write culty data
    await fetchDataAndWriteToFile(process.env.CULTY, 'culty.json');

    // Fetch and write sports boys data
    await fetchDataAndWriteToFile(process.env.SPORTS_BOYS, 'sports_boys.json');

    // Fetch and write sports girls data
    await fetchDataAndWriteToFile(process.env.SPORTS_GIRLS, 'sports_girls.json');



})

//export the function
export default updateData;