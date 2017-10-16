import sequelize from '../../db/connection';
import Languages from '../../models/language';

export const get = (req, res, next) => {
    // sequelize
    //     .authenticate()
    //     .then(() => {
    //         console.log('Connection has been established successfully.');
    //     })
    //     .catch(err => {
    //         console.error('Unable to connect to the database:', err);
    //     });


    // Languages.findAll({
    //
    // })
    //     .then((result) => {
    //         res.send(result)
    //     })

    Languages.create({
        id: 2,
        name: "Привет пупсики",
        isMainLanguage: true
    })
        .then(result => {
            res.send(result)
        })



    // Language.create(
    //     {
    //         id: 1,
    //         name: 'omnomnom',
    //         isMainLanguage: true
    //     })
    //     .then(() => Language.findOrCreate(
    //         {
    //             where: {
    //                 id: 1
    //             },
    //             defaults: {
    //                 job: 'something else'
    //             }
    //         }))
    //     .spread((user, created) => {
    //         console.log(user.get({
    //             plain: true
    //         }))
    //         console.log(created)
    //     })
};