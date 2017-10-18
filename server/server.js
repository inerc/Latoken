import http from 'http';
import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import config from './config';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import api from './api';

const compiler = webpack(webpackConfig);

let app = express();
let server = http.createServer(app);

app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use(webpackMiddleware(compiler,{hot: true, publicPath: webpackConfig.output.publicPath, noInfo:true}));
app.use(webpackHotMiddleware(compiler));

api(app);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

server.listen(config.get('server:port'), () => {
    console.log('Running on localhost:' + config.get('server:port'))
});

module.exports = server;