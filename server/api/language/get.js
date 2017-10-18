import Language from '../../models/language';

export const getLanguages = (req, res, next) => {
    Language.findAll()
        .then(languages => {
            res.send(languages)
        })
};