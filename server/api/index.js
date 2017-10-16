import {post} from './label/post';
import {get} from './label/get';

module.exports = (app) => {
    app.post('/label/', post);
    app.get('/label/', get);
};