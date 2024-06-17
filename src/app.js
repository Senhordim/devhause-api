import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes.js';
import { fileURLToPath } from 'url';

import { requestLog } from './middlewares/log/RequstLog.js';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

class App {
    constructor(){
        this.server = express();
        mongoose.connect(`${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
        this.middlewares();
        this.routes();
    }

    middlewares(){
				this.server.use('/api/v1', this.routes);
				this.server.use(
					'/files',
					express.static(path.resolve(__dirname, '..', 'uploads'))
				);
        this.server.use(express.json());
        this.server.use(requestLog);

    }	

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;
