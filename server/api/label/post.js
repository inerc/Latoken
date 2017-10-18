import Label from '../../models/label';

exports.post =  (req, res, next) => {

    let {data, values} = req.body;

    Label.findOne({ where: data})
        .then((obj) => {
            if(obj) { // update
                res.send('Update');
                return obj.update(values);
            }
            else { // insert
                res.send('insert')
                return Label.create(values);
            }
        })

};