import schedule from 'node-schedule'
import sendMail from './mailer.js';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import * as url from 'url';
import pkg from 'pg';
import pgPromise from 'pg-promise';
import fs from 'fs';
import axios from 'axios';


//get environment variables
dotenv.config();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: __dirname + '../.env' });



//create an auth client instance for gmail api
const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });


//function to get events from the sheet
const getevents = async () => {
    try {
        const { data } = await axios.get(process.env.NOTIFICATIONS);
        return data;
    }
    catch (error) {
        console.error('error', error.message)
    }
}

const { Pool } = pkg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
pool.connect()



// ...
const interval = 15
const job = schedule.scheduleJob(`*/${interval} * * * *`, async function () {
    console.log(`running a task every ${interval} minutes`);
    let events = await getevents();

    events.forEach((event) => {
        event.StartTime = new Date(event.StartTime);
        event.Teams = event.Teams.split(',').map((team) => team.trim());
    })

    events.sort((a, b) => a.StartTime - b.StartTime);


    console.log('after sorting:', events);

    const now = new Date();
    const minTime = new Date(now.getTime() + interval * 60 * 1000);
    const maxTime = new Date(now.getTime() + (2 * interval) * 60 * 1000 - 1);

    events = events.filter((event) => {
        return (event.StartTime > minTime && event.StartTime <= maxTime);
    });


    console.log('after filtering as per time gap:', events);

    const emailPromises = events.map(async (event) => {
        try {
            //get all the recipients for the event
            let recipientsArray = [];
            
            //if the event is for all teams, get all the users
            if (event.Teams.includes('All Blocks')) {
                recipientsArray = [
                    'bdb23@iith.ac.in',
                    'btech@iith.ac.in',
                    'bdb21@iith.ac.in',
                    'bdb22@iith.ac.in',
                    'lamh23@iith.ac.in',
                    'lapg@iith.ac.in',
                    'laphd@iith.ac.in',
                    'mtech@iith.ac.in',
                    'mdm23@iith.ac.in',
                    'mdm22@iith.ac.in',
                    'phd@iith.ac.in'
                ]
                event.Teams = ['All Blocks'];
            }

            //if the event is for specific teams, get the users who support those teams
            else {
                const queryText = `
                                    SELECT DISTINCT u.email
                                    FROM users u
                                    JOIN prefered_event pe ON u.user_id = pe.user_id
                                    JOIN events e ON pe.prefered_event_id = e.event_id
                                    JOIN supporting_teams st ON u.user_id = st.user_id
                                    WHERE e.event_name ILIKE $1
                                    OR st.supporting_team_name ILIKE ANY($2::text[]);
                                    `;
                const queryParams = [event.name, event.Teams];
                const completeQuery = pgPromise.as.format(queryText, queryParams);

                const result = await pool.query(completeQuery);
                const emails = result.rows.map((row) => row.email);
                recipientsArray.push(...emails);
            }


            console.log('recipients: ', recipientsArray);


            const imageSrc = `https://drive.google.com/uc?export=view&id=1JZiD6fngGxj2NFwBrJrLjjxkuuW3WUp9`;


            //body of the email
            const body = `<html>

<head>
    <meta charset="UTF-8">
    <title>Join us in Milan!</title>
</head>

<body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
            <td align="center" bgcolor="#f4f4f4">
                <table cellpadding="0" cellspacing="0" border="0" width="600" style="border-collapse:collapse;">
                    <tr>
                        <td align="center" bgcolor="#ffffff" style="padding: 40px 0 30px 0;">
                            <img src="${imageSrc}" alt="Event Banner" width="300" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                            <table cellpadding="0" cellspacing="0" border="0" width="100%"
                                style="border-collapse:collapse;">
                                <tr>
                                    <td style="color: #333333; font-family: Arial, sans-serif; font-size: 24px;">
                                        <strong>Join us in Milan!</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="padding: 20px 0 30px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 22px;">
                                        We're excited to invite you to our upcoming event in Milan. It's going to be a
                                        thrilling day filled with fun, games, and excitement!
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="padding: 0 0 20px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 22px;">
                                        <strong>Event Details:</strong>
                                        <br>
                                        <strong>Name:${event.Name}</strong>
                                        <br>
                                        <strong>Time:${event.StartTime}  (status : ${event.Status})</strong>
                                        <br>
                                        <strong>Participating Blocks:${event.Teams.join(' ,')}</strong>
                                        <br>
                                        <strong>Location:</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 22px;">
                                        Come and cheer for your team as they aim for victory. It's going to be an
                                        unforgettable experience!
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="padding: 30px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 22px;">
                                        <strong>RSVP:</strong>
                                        <br>
                                        We look forward to your participation. Please RSVP by [Insert RSVP Deadline].
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#333333"
                            style="padding: 20px 30px 20px 30px; color: #ffffff; font-family: Arial, sans-serif; font-size: 14px; text-align: center;">
                            © 2023 Milan Event. All rights reserved.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>`

            if (recipientsArray.length > 0) {

                const mailDetails = {
                    from: 'abhinay.sadineni@gmail.com',
                    to: recipientsArray.join(', '),
                    subject: `Event Reminder MILAN 23: ${event.name} `,
                    html: body
                };

                console.log(mailDetails);

                const send_time = event.StartTime;
                send_time.setMinutes(event.StartTime.getMinutes() - interval+1);

                return schedule.scheduleJob(send_time, async function () {
                    const result = await sendMail(mailDetails, oAuth2Client);
                    console.log('email sent:', result.messageId);
                });

            }
        } catch (error) {
            console.error('Error executing query:', error);
        }
    });

    await Promise.all(emailPromises);
});


export default job;










