module.exports = (app) => {
    app.post('/label/', require('./label/post').post);
    app.get('/label/', require('./label/get').get);
};