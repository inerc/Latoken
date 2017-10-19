import Language from '../../models/language';

export const getLanguages = (req, res) => {
    Language.findAll()
        .then(languages => {
            res.send(languages)
        })
};