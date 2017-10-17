import sequelize from '../../db/connection';
import Languages from '../../models/language';

export const get = (req, res, next) => {
    Languages.create({
        name: "Mon",
        isMainLanguage: true
    })
        .then(result => {
            res.send(result)
        })
};