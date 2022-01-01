import express from 'express';
import cors from 'cors';
import dotEnv from 'dot-env';

import { createServer } from 'http';
import { Server } from 'socket.io'; 

import { join } from 'path';

import routes from './routes';

const app = express(); 

const httpServer = createServer(app);

const io = new Server(httpServer, {cors: {origins: '*:*'}}); 

app.use(cors());
app.use(express.json());

app.use(routes);

export { httpServer, io }