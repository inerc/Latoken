import Sequelize from 'sequelize';
import sequelize from '../db/connection';

const Label = sequelize.define('label', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    key: Sequelize.STRING,
    languageId: Sequelize.STRING,
    value: Sequelize.STRING,
    editTimestamp: Sequelize.DATE
});

export default Label;