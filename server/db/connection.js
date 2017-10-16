import Sequelize from 'sequelize';
import config from '../config'

const sequelize = new Sequelize(
    config.get('database:db'),
    config.get('database:user'),
    config.get('database:password'), {
    host: config.get('database:host'),
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

export default sequelize;