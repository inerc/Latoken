import {post} from './label/post';
import {get} from './label/get';
import {getLanguages} from './language/get';

module.exports = (app) => {
    app.post('/label', post);
    app.get('/label', get);
    app.get('/language', getLanguages)
};