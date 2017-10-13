import Sequelize from 'sequelize';
import sequelize from '../db/connection';

const Label = sequelize.define('label', {
    id: Sequelize.INTEGER,
    key: Sequelize.STRING,
    languageId: Sequelize.STRING,
    value: Sequelize.STRING,
    editTimestamp: Sequelize.DATE
});

export default Label;