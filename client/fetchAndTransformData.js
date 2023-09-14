import axios from 'axios';
import fs from 'fs';

async function fetchAndTransformData() {
  try {
    const response = await axios.get(
      "https://sheetdb.io/api/v1/96c2w3c8jsuuz"
    );

    const data = response.data;

    const transformedData = {};

    data.forEach((event) => {
      const { Name, Teams, StartTime, Status, location, Category, Date, Time } = event;

      // Create a unique identifier for the event
      const eventId = Math.random().toString(36).substring(7);

      if (!transformedData[Date]) {
        transformedData[Date] = [];
      }

      transformedData[Date].push({
        id: eventId,
        title: Name,
        body: [Teams, location, Status].join(", "),
        time: Time,
        category: Category,
      });
    });

    fs.writeFileSync("eventsSchedule.json", JSON.stringify(transformedData));

    console.log("Data fetched, transformed, and saved to eventsSchedule.json");
  } catch (error) {
    console.error("Error fetching and transforming data: ", error);
  }
}

fetchAndTransformData();
setInterval(fetchAndTransformData, 30*60*1000);
