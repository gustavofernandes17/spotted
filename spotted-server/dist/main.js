"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./websocket");
const typeorm_1 = require("typeorm");
const http_1 = require("./http");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3333;
(0, typeorm_1.createConnection)().then(() => {
    http_1.httpServer.listen(PORT, () => console.log(`O Pai tá ON na porta ${PORT}`));
}).catch(err => console.error(err));
