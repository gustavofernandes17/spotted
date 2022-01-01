import { getConnection } from 'typeorm';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { Spotted } from '../models/Spotted';

import axios from 'axios';

export interface ICreateSpottedParams {
  content: string;
}


export default class SpottedController {

  async create(request: Request, response: Response) {

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    
    const connection = getConnection(); 
    const spottedRepository = connection.getRepository(Spotted);

    const { content } = request.body as ICreateSpottedParams;

    const newSpotted = new Spotted; 

    newSpotted.content = content;
    newSpotted.date_created = new Date().toISOString();
    newSpotted.image_url = 'https://images.unsplash.com/photo-1638954617383-7aeef3860aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80'

    try {
      const unsplash_response = await axios.get('https://api.unsplash.com/photos/random', {
        headers: {
          'Authorization': 'Client-ID '+ process.env.UNSPLASH_ACCESS_KEY
        }
      })

      newSpotted.image_url = unsplash_response.data.urls.regular;
    }
    catch(err) {
      console.log(err)
    }
    // console.log(process.env.UNSPLASH_ACCESS_KEY); 

    // console.log(unsplash_response); 

    await spottedRepository.save(newSpotted);

    console.log(newSpotted);

    
    return response.json(newSpotted); 
  }
  async index(request: Request, response: Response) {

    const connection = getConnection();
    const spottedRepository = connection.getRepository(Spotted);
  
    const spotteds = await spottedRepository.find();
    

    console.log('LOG: Indexing Spotteds')

    
    return response.json(spotteds); 
  
  }

}