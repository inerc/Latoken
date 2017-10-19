import Label from '../../models/label';

export const get = (req, res, next) => {
    Label.findAll()
        .then(labels => {
        res.send(labels)
    })
};