import Label from '../../models/label';

exports.post = (req, res) => {

    let {key, languageId} = req.body;
    let data = req.body;
    data.editTimestamp = Date.now();

    Label.findOne({where: {key: key, languageId: languageId}})
        .then((obj) => {
            if (obj) { // update
                obj.update(data)
                    .then((result) => {
                        res.send(JSON.stringify({
                            status: 'update',
                            data: result,
                        }))
                    })
            }
            else { // insert
                Label.create(data, {
                    returning: true,
                    plain: true
                })
                    .then(() => {
                        Label.findOne({where: data})
                            .then(forReturn => {
                                res.send(JSON.stringify({
                                    status: 'insert',
                                    data: forReturn
                                }))
                            })
                    })
            }
        })
};