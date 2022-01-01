"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const express_validator_1 = require("express-validator");
const Spotted_1 = require("../models/Spotted");
const axios_1 = __importDefault(require("axios"));
class SpottedController {
    async create(request, response) {
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const connection = (0, typeorm_1.getConnection)();
        const spottedRepository = connection.getRepository(Spotted_1.Spotted);
        const { content } = request.body;
        const newSpotted = new Spotted_1.Spotted;
        newSpotted.content = content;
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
        // console.log(process.env.UNSPLASH_ACCESS_KEY); 
        // console.log(unsplash_response); 
        await spottedRepository.save(newSpotted);
        console.log(newSpotted);
        return response.json(newSpotted);
    }
    async index(request, response) {
        const connection = (0, typeorm_1.getConnection)();
        const spottedRepository = connection.getRepository(Spotted_1.Spotted);
        const spotteds = await spottedRepository.find();
        console.log('LOG: Indexing Spotteds');
        return response.json(spotteds);
    }
}
exports.default = SpottedController;
