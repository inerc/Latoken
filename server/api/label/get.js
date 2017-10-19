import Label from '../../models/label';

export const get = (req, res) => {
    Label.findAll()
        .then(labels => {
        res.send(labels)
    })
};