import Sequelize from 'sequelize';
import sequelize from '../db/connection';

const Languages = sequelize.define('languages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    isMainLanguage: Sequelize.BOOLEAN
});

export default Languages;