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
const rule = `0 0,15,30,45 * * * *`

const interval = 15
const job = schedule.scheduleJob({ rule: rule, tz: 'Asia/Kolkata' }, async function () {
    console.log(`running a task every ${interval} minutes`);
    let events = await getevents();
    console.log(events.length)

    events.map((event) => {
    
            console.log(event.StartTime)
        
        // Check if event.Teams is a string before splitting
        if (typeof event.Teams === 'string') {
            event.Teams = event.Teams.split(',').map((team) => team.trim());
        }
    });
    
    const now = new Date();
    now.setSeconds(0);
    now.setMilliseconds(0);
    const minTime = new Date(now.getTime() + interval * 60 * 1000);
    const maxTime = new Date(now.getTime() + (2 * interval-1) * 60 * 1000);

        events = events.filter((event) => {
            const startTime = new Date(event.StartTime);
            console.log('StartTime:', startTime);
            console.log('minTime:', minTime);
            console.log('maxTime:', maxTime);
            return startTime >= minTime && startTime <= maxTime;
        });


    console.log('after filtering as per time gap:', events);

    const emailPromises = events.map(async (event) => {
        try {
            //get all the recipients for the event
            let recipientsArray = [];
            
            //if the event is for all teams, get all the users
            if (event.includes('All Blocks')) {
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



            //body of the email
            const htmlContent = `
            <html>

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
                                    <td align="center" bgcolor="#ffffff" style="">
                                        <img src="https://drive.google.com/uc?export=view&id=1SDgJFvZeZLIWLFAOPjnhdH6Ch-z6X74W" alt="Event Banner" width="300" height="300">
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
                                                    <strong>Time:${event.Time}</strong>
                                                    <br>
                                                    <strong> status : ${event.Status} </strong>
                                                    <br>
                                                    <strong>Participating Blocks:${event.Teams.join(' ,')}</strong>
                                                    <br>
                                                    <strong>Location:${event.location}</strong>
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
                                                    <br>
                                                    We look forward to your participation..
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#333333"
                                        style="padding: 20px 30px 20px 30px; color: #ffffff; font-family: Arial, sans-serif; font-size: 14px; text-align: center;">
                                        © 2023 Milan . All rights reserved.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            
            </html>
        `;
        
        // You can now use the "htmlContent" variable within your Nodemailer "mailOptions" object.
        

            if (recipientsArray.length > 0 ) {

                const mailDetails = {
                    from: 'milan@gymkhana.iith.ac.in',
                    bcc: recipientsArray.join(', '),
                    subject: `Event Reminder MILAN 23: ${event.Name} `,
                    html: htmlContent
                };

                console.log(mailDetails);

                const send_time = new Date(event.StartTime);
                send_time.setMinutes(send_time.getMinutes() - interval + 1);

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











