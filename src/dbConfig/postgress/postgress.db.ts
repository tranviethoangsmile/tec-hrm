import sequelize, { Sequelize } from 'sequelize';
import config from '../../configs/system.config';
const CONFIG_DB = config.db;
const postgress_db = new Sequelize(
    CONFIG_DB.name,
    CONFIG_DB.username,
    CONFIG_DB.password,
    {
        dialect: CONFIG_DB.dialect,
        host: CONFIG_DB.host,
        port: CONFIG_DB.port,
        logging: false,
        // timezone: CONFIG_DB.timezone,
    },
);
postgress_db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
export default postgress_db;
