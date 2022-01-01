"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./http");
const Spotted_1 = require("./models/Spotted");
const axios_1 = __importDefault(require("axios"));
const typeorm_1 = require("typeorm");
http_1.io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('create_spotted', async (message) => {
        console.log('LOG: Creating Spotted');
        const newSpotted = new Spotted_1.Spotted;
        const connection = (0, typeorm_1.getConnection)();
        const spottedRepository = connection.getRepository(Spotted_1.Spotted);
        newSpotted.content = message.content;
        newSpotted.date_created = new Date().toISOString();
        newSpotted.image_url = 'https://images.unsplash.com/photo-1638954617383-7aeef3860aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80';
        try {
            const unsplash_response = await axios_1.default.get('https://api.unsplash.com/photos/random', {
                headers: {
                    'Authorization': 'Client-ID ' + process.env.UNSPLASH_ACCESS_KEY
                }
            });
            newSpotted.image_url = unsplash_response.data.urls.regular;
        }
        catch (err) {
            console.log(err);
        }
        await spottedRepository.save(newSpotted);
        http_1.io.emit('new_spotted', newSpotted);
    });
});
