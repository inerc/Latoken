import Label from '../../models/label';

exports.post =  (req, res, next) => {

    let {key,languageId } = req.body;
    console.log(req.body)
    console.log(key, languageId)

    Label.findOne({ where: {key: key, languageId: languageId}})
        .then((obj) => {
        console.log(obj)
            if(obj) { // update
                    obj.update(req.body)
                        .then((result, data) => {
                            res.send(JSON.stringify({
                                status: 'update',
                                result: result,
                                data: data
                            }))
                        })
            }
            else { // insert
                     Label.create(req.body, {
                         returning: true,
                         plain: true})
                         .then(() => {
                            Label.findOne({where: req.body})
                                .then(forReturn => {
                                    res.send(JSON.stringify({
                                        status: 'insert',
                                        result: forReturn
                                    }))
                                })
                         })
            }
        })

};