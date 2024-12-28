import { Dialect } from '../enums';
import dotenv from 'dotenv';
dotenv.config();
const ENV = process.env;

interface AppConfig {
    port: number;
}

interface DbConfig {
    host: string;
    port: number;
    name: string;
    dialect: Dialect;
    username: string;
    password: string;
    timezone: string;
}

interface sysConfig {
    app: AppConfig;
    db: DbConfig;
}

const product: sysConfig = {
    app: {
        port: parseInt(ENV.PRO_PORT!),
    },
    db: {
        host: ENV.PRO_HOST!,
        port: parseInt(ENV.PRO_DB_PORT!),
        name: ENV.PRO_DB_NAME!,
        dialect: Dialect.POSTGRES,
        username: ENV.PRO_DB_USERNAME!,
        password: ENV.PRO_DB_PASSWORD!,
        timezone: ENV.PRO_DB_TIMEZONE!,
    },
};

const developer: sysConfig = {
    app: {
        port: parseInt(ENV.DEV_PORT!),
    },
    db: {
        host: ENV.DEV_HOST!,
        port: parseInt(ENV.DEV_DB_PORT!),
        name: ENV.DEV_DB_NAME!,
        dialect: Dialect.POSTGRES,
        username: ENV.DEV_DB_USERNAME!,
        password: ENV.DEV_DB_PASSWORD!,
        timezone: ENV.DEV_DB_TIMEZONE!,
    },
};

const config = ENV.NODE_EVN === 'dev' ? developer : product;

export default config;
