import { Router } from 'express';

import {
  body,
} from 'express-validator';

import SpottedController from './controllers/SpottedController';


const spottedController = new SpottedController();
const router = Router();

router.get('/', (request, response) => {
  return response.json({msg: 'o pai ta ON'}); 
})


router.post('/spotted',
  body('content').isString(),
  spottedController.create
);

router.get('/spotteds', spottedController.index); 

// router.get('/spotted/:id');
// router.get('/spotted/:name');
// router.delete('/spotted/:id');

export default router;