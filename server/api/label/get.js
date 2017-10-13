import sequelize from '../../db/connection';
import Language from '../../models/language';

exports.get = (req, res, next) => {
    console.log('get');
    // sequelize
    //     .authenticate()
    //     .then(() => {
    //         console.log('Connection has been established successfully.');
    //     })
    //     .catch(err => {
    //         console.error('Unable to connect to the database:', err);
    //     });

    Language.create(
        {
            id: 1,
            name: 'omnomnom',
            isMainLanguage: true
        })
        .then(() => Language.findOrCreate(
            {
                where: {
                    id: 1
                },
                defaults: {
                    job: 'something else'
                }
            }))
        .spread((user, created) => {
            console.log(user.get({
                plain: true
            }))
            console.log(created)
        })
};