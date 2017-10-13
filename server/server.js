import http from "http";
import config from './config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = require('express')();
const server = http.createServer(app);

app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());

require('./api/')(app);

server.listen(config.get('server:port'), () => {
    console.log('Running on localhost:' + config.get('server:port'))
});