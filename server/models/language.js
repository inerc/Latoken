import Sequelize from 'sequelize';
import sequelize from '../db/connection';

const Language = sequelize.define('language', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    isMainLanguage: Sequelize.BOOLEAN
});

export default Language;