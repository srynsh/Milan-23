import axios from 'axios';
import fs from 'fs';
import path from 'path';
import schedule from 'node-schedule';
import dotenv from 'dotenv';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: __dirname + '../.env' });


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


fetchDataAndWriteToFile(process.env.EVENTS_SCHEDULE, 'eventsSchedule.json')