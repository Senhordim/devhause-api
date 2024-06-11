import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import { requestLog } from './middlewares/log/RequstLog.js';

class App {
    constructor(){
        this.server = express();
        mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}`);
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(requestLog);
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;
