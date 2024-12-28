import express, {
    Express,
    Application,
    Request,
    Response,
    NextFunction,
} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import http from 'http';
import config from './configs/system.config';
import rootRouter from './routers';
dotenv.config();
const ENV = process.env;
const PORT = config.app.port;
const HOST_NAME = ENV.HOST_NAME_SERVER;
const app: Application = express();
const server = http.createServer(app);
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    );
    res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, content-type, Authorization',
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(rootRouter);
server.listen(PORT, () => {
    console.log(`Server is running on ${HOST_NAME}:${PORT}`);
});
process.title = 'TEC-HRM';
process.on('SIGINT', () => {
    server.close(() => {
        console.warn(`server closed`);
    });
});
