import job from './features/notification.js'
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs/promises';
import http from "http";
import jwt from "jsonwebtoken";
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import path from 'path';
import pkg from 'pg';
import { Server } from 'socket.io';
import url from 'url';
import updateData from './features/update.js';

//get environment variables
dotenv.config();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: __dirname + '.env' });


const { Pool } = pkg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }

});
pool.connect()

//start the job
job.schedule();
updateData.schedule();

const app = express();
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

let eventdata = [
 {
        id: 'adfasd',
        sport: 'Football',
        name: 'Football Finals',
        score1: 2,
        score2: 3,
        team1: 'Charaka',
        team2: 'Bhabha',
        data: 'myran'
    },
    {
        sport: 'Football',
        event: 'Football',
        id: 'mvrzVIb7f2',
        team1: 'Varahamira',
        team2: 'Charaka',
        score1: 0,
        score2: 0
    },
    {
        sport: 'Basketball',
        event: 'Basketball',
        id: 'InKz8TOSSx',
        team1: 'Varahamira',
        team2: 'Charaka',
        score1: 0,
        score2: 0
    },
    {
        sport: 'Cricket',
        event: 'Cricket',
        id: '6X69TiRFvy',
        team1: 'Varahamira',
        team2: 'Charaka',
        score1: 0,
        score2: 0,
        wicket1: 0,
        wicket2: 0,
        over1: 0,
        over2: 0
    },
]

//Socket code goes here
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("setup", (data) => {
        socket.emit("setupdata", eventdata)
        console.log(data);
    })

    socket.on("recieve_data", (data) => {
        let newdata = {}
        if (data.sport == "Football" || data.sport == "Basketball" || data.sport == "Hockey") {
            console.log("nbew data is football")
            newdata = {
                ...data,
                score1: 0,
                score2: 0
            }
        }
        else if(data.sport == "Tennis"){
            newdata = {
                ...data,
                score1: 0,
                score2: 0,
                setscore1: '0',
                setscore2: '0'
            }
        }
        else if (data.sport == "Cricket") {
            newdata = {
                ...data,
                score1: 0,
                score2: 0,
                wicket1: 0,
                wicket2: 0,
                over1: 0,
                over2: 0,
            }
        }
        else if (data.sport == "Badminton" || data.sport == "Volleyball" || data.sport == "Table Tennis" || data.sport == "Squash") {
            newdata = {
                ...data,
                score1: [0],
                score2: [0]
            }
        }
        console.log("NEW DATA IS", newdata)
        eventdata = eventdata.concat(newdata);
        console.log("NEW EVENTDATA IS ", eventdata)
        socket.broadcast.emit("new_event_broadcast", newdata)
        socket.broadcast.emit("clientupdates", eventdata);
    });

    socket.on("update_score", (data) => {
        const id = data.id;
        try {
            const index = eventdata.findIndex((event) => event.id === id);
            // eventdata[index]
            if (data.score1) {
                eventdata[index].score1 = data.score1;
            }
            if (data.score2) {
                eventdata[index].score2 = data.score2;
            }
            if (data.over1) {
                eventdata[index].over1 = data.over1;
            }
            if (data.over2) {
                eventdata[index].over2 = data.over2;
            }
            if (data.wicket1) {
                eventdata[index].wicket1 = data.wicket1;
            }
            if (data.wicket2) {
                eventdata[index].wicket2 = data.wicket2;
            }
            if(data.setscore1){
                eventdata[index].setscore1 = data.setscore1;
            }
            if(data.setscore2){
                eventdata[index].setscore2 = data.setscore2;
            }

            socket.broadcast.emit("admin_update", data)
            socket.broadcast.emit("clientupdates", eventdata)
        } catch (e) {
            socket.broadcast.emit("info_message", { message: "Event not found" })

        }
    })

    socket.on("remove_match", (data) => {
        const id = data.id;
        try {
            console.log("event removed")
            const index = eventdata.findIndex((event) => event.id === id);
            if (index >= 0 && index < eventdata.length) {
                eventdata.splice(index, 1)
            }
            const newdata = { id: id }
            socket.broadcast.emit("event_removed", newdata)
            socket.emit("event_removed", newdata)
            console.log(newdata, eventdata)
            socket.broadcast.emit("clientupdates", eventdata)
        } catch (e) {
            socket.emit("info_message", { message: "Event not found" })
        }
    })

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

const corsOptions = {
    origin: [process.env.FRONTEND_URL,process.env.ADMIN_URL],
    credentials: true, // Allow credentials (cookies, HTTP authentication)
};
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser());

passport.use('user-google',
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
            scope: ['profile', 'email'],
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(profile)
            return done(null, profile);
        }
    )
);

passport.use('admin-google',
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.BACKEND_URL+'/auth/google/admin/callback',
            scope: ['profile', 'email'],
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(profile)
            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.get('/', (req, res) => {
    res.send('Milan Backend Code here');
});

app.get(
    '/auth/google',
    passport.authenticate('user-google')
);

app.get(
    '/auth/google/admin',
    passport.authenticate('admin-google')
);

app.get('/auth/google/callback',
    passport.authenticate('user-google', {
        failureRedirect: process.env.FRONTEND_URL+'/login',
        session: false
    }),
    async function (req, res) {
        //SQL stuff here
        const query = 'SELECT * FROM users WHERE email=$1'
        const data = await pool.query(query, [req.user.emails[0].value])
        if (data.rows.length > 0) {

        }
        else {
            const newquery = `INSERT INTO users (user_id, google_id, email, display_name, avatar_url, created_at, updated_at) VALUES (${Math.floor(Math.random() * 100000)},'${req.user._json.sub}', '${req.user._json.email}',' ${req.user._json.name}','${req.user._json.picture}','${(new Date).toISOString()}','${(new Date).toISOString()}')`
            pool.query(newquery, (error, results) => {
                if (error) throw error;
                console.log('New User Created')
            })
            //console.log(req.user)
        }
        if (req.user._json.hd == undefined && req.user.hd !== 'iith.ac.in') {
            res.json({ auth: 'false', message: 'use iith email to continue' })
        } else {
            const jwttoken = jwt.sign(req.user.emails[0].value, 'milan_backend_secret')
            //console.log(res)
            res.cookie('authtoken', jwttoken, { maxAge: 432000, httpOnly: false });
        res.redirect(process.env.FRONTEND_URL+'/profile')
        }
    }
);


app.get('/auth/google/admin/callback',
    passport.authenticate('admin-google', {
        failureRedirect: process.env.ADMIN_URL,
        session: false
    }),
    async function (req, res) {
        //SQL stuff here
        const query = 'SELECT * FROM admin WHERE email=$1'
        const data = await pool.query(query, [req.user.emails[0].value])
        if (data.rows.length > 0) {
            const jwttoken = jwt.sign(req.user.emails[0].value, 'milan_backend_secret')
            res.cookie('adminauthtoken', jwttoken, { maxAge: 432000, httpOnly: false });
            res.redirect(process.env.ADMIN_URL)
        }
        else{
            res.json({ auth: 'false', message: 'You are not an admin' })
        }
    }
);


//send leaderboard data
app.get('/leaderboard', async (req, res) => {
    const filePath = path.join(__dirname, 'data', 'leaderboard.json');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
})

//send techy data
app.get('/techy', async (req, res) => {
    const filePath = path.join(__dirname, 'data', 'techy.json');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
    console.log("techy data sent")
})

//send culty data
app.get('/culty', async (req, res) => {
    const filePath = path.join(__dirname, 'data', 'culty.json');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
    console.log("culty data sent")
})

//send sports boys data
app.get('/sports_boys', async (req, res) => {
    const filePath = path.join(__dirname, 'data', 'sports_boys.json');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
    console.log('sports boys data sent')
})

//send sports girls data
app.get('/sports_girls', async (req, res) => {
    const filePath = path.join(__dirname, 'data', 'sports_girls.json');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
    console.log('sports girls data sent')
})

app.get('/eventsSchedule', async (req, res) => {
    const filePath = path.join(__dirname, 'data', 'eventsSchedule.json');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
    console.log('events schedule data sent')
});








const verifyUser = (req, res, next) => {
    const cookie = req.cookies.authtoken;
    if (!cookie) {
        res.json({ auth: false })
    }
    else {
        jwt.verify(cookie, "milan_backend_secret", (err, email) => {
            if (err) {
                res.json({ auth: false, message: "Invalid Token" });
            }
            else {
                res.locals.email = email;
                next();
            }
        });
    }
}

app.get('/profile', verifyUser, async (req, res) => {
    const getUserQuery = 'SELECT * FROM users WHERE email = $1';
    const getUserResult = await pool.query(getUserQuery, [res.locals.email]);
    const user = getUserResult.rows[0];
    const getUserteamsQuery = 'SELECT * FROM supporting_teams WHERE email = $1';
    const getUserteamsResult = await pool.query(getUserteamsQuery, [res.locals.email]);
    const teams = getUserteamsResult.rows;
    const teams_array = [];
    for (const team of teams) {
        const team_name = team.supporting_team_name;
        teams_array.push(team_name);
    }
    const getUsereventsQuery = 'SELECT * FROM prefered_event WHERE email = $1';
    const getUsereventsResult = await pool.query(getUsereventsQuery, [res.locals.email]);
    const events = getUsereventsResult.rows;
    const events_array = [];
    for (const event of events) {
        const event_name = event.prefered_event_name;
        events_array.push(event_name);
    }

    const user_object = {
        user_id: user.user_id,
        email: user.email,
        display_name: user.display_name,
        avatar_url: user.avatar_url,
        supportedTeams: teams_array,
        preferedEvents: events_array
    }
    console.log(user_object, "user fetched");
    res.json({ success: true, auth: true, user: user_object });
})

app.get('/hello', async (req, res) => {
    res.send("Hello People")
})


//update supporting teams
app.post('/profile/update', verifyUser, async (req, res) => {
    const { supportedTeams, preferedEvents, events } = req.body; // Assuming supportedTeams and preferedEvents are arrays of team names or event IDs.

    const userEmail = res.locals.email;

    try {
        // Get the user_id based on the user's email from the users table.
        const getUserIdQuery = 'SELECT user_id FROM users WHERE email = $1';
        const getUserIdResult = await pool.query(getUserIdQuery, [userEmail]);

        if (getUserIdResult.rows.length === 0) {
            // Handle the case where the user with the given email does not exist.
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }

        const userId = getUserIdResult.rows[0].user_id;

        // Insert supported teams for the user into the supporting_teams table.
        for (const team of supportedTeams) {
            try {
                const team_id_query = 'SELECT team_id FROM teams WHERE team_name = $1';
                const team_id_result = await pool.query(team_id_query, [team]);

                if (team_id_result.rows.length === 0) {
                    console.error(`Team not found in the database: ${team}`);
                    continue; // Skip to the next iteration
                }

                const team_id = team_id_result.rows[0].team_id;
                console.log(`Team: ${team}, Team ID: ${team_id}`);

                const insertSupportedTeamQuery = 'INSERT INTO supporting_teams (user_id, email, supporting_team, supporting_team_name) VALUES ($1, $2, $3, $4) ON CONFLICT (user_id, email, supporting_team) DO NOTHING';

                // Now, insert the data with the retrieved team_id
                await pool.query(insertSupportedTeamQuery, [userId, userEmail, team_id, team]);
            } catch (error) {
                console.error('Error:', error);
            }
        }


        // Insert preferred events for the user into the prefered_event table.
        if (events) {
            for (const event of events) {
                try {
                    const event_id_query = 'SELECT event_id FROM events WHERE event_name = $1';
                    const event_id_result = await pool.query(event_id_query, [event]);

                    if (event_id_result.rows.length === 0) {
                        console.error(`Event not found in the database: ${event}`);
                        continue; // Skip to the next iteration
                    }

                    const event_id = event_id_result.rows[0].event_id;
                    console.log(`Event: ${event}, Event ID: ${event_id}`);

                    const insertPreferredEventQuery = 'INSERT INTO prefered_event (email, user_id, prefered_event_id, prefered_event_name) VALUES ($1, $2, $3, $4) ON CONFLICT (email, user_id, prefered_event_id) DO NOTHING';

                    // Now, insert the data with the retrieved event_id
                    await pool.query(insertPreferredEventQuery, [userEmail, userId, event_id, event]);
                } catch (error) {
                    console.error('Error:', error);
                }
            }

        }

        res.send({ success: true, message: 'Profile updated successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Profile update failed' });
    }

});

// app.use('/api/events', require('./events'))
// module.exports = io

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log('Server started on port ' + port);
});
