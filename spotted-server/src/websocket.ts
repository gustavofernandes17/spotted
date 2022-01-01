import { io } from './http';

import {Spotted} from './models/Spotted';
import axios from 'axios'; 
import {getConnection} from 'typeorm'; 


io.on('connection', (socket) => {
  console.log(socket.id); 

  socket.on('create_spotted', async (message) => {

    console.log('LOG: Creating Spotted')

    const newSpotted = new Spotted;
      
    const connection = getConnection(); 
    const spottedRepository = connection.getRepository(Spotted);


    newSpotted.content = message.content; 
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

    await spottedRepository.save(newSpotted); 


    io.emit('new_spotted', newSpotted);
  })
  
})