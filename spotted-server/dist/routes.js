"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const SpottedController_1 = __importDefault(require("./controllers/SpottedController"));
const spottedController = new SpottedController_1.default();
const router = (0, express_1.Router)();
router.get('/', (request, response) => {
    return response.json({ msg: 'o pai ta ON' });
});
router.post('/spotted', (0, express_validator_1.body)('content').isString(), spottedController.create);
router.get('/spotteds', spottedController.index);
// router.get('/spotted/:id');
// router.get('/spotted/:name');
// router.delete('/spotted/:id');
exports.default = router;
