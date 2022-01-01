import 'reflect-metadata';
import './websocket';

import { createConnection } from 'typeorm'; 

import { httpServer } from './http';
import dotEnv from 'dotenv';


dotEnv.config()


const PORT = process.env.PORT || 3333;


createConnection().then(() => {

  httpServer.listen(PORT, () => console.log(`O Pai tá ON na porta ${PORT}`));

}).catch(err => console.error(err));