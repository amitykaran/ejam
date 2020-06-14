import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Initialize the Express App
const app = new Express();

// Import required modules
import serverConfig from './config';


import deployment from './routes/deployment.routes';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

const dbOptions = {
    reconnectTries: 300, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 30, // Maintain up to 10 socket connections
};

// MongoDB Connection
mongoose.connect(serverConfig.MONGO_URL, dbOptions, (error) => {
    console.log(serverConfig.MONGO_URL);
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
});

const db = mongoose.connection;

db.on('connected', function () {
    console.log('db connection open');
});

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use('/api/deployment', deployment);


// start app
app.listen(serverConfig.PORT, (error) => {
    if (!error) {
        console.log(`e-jam API is running on port: ${serverConfig.PORT}!`);
    }
});

export default app;
