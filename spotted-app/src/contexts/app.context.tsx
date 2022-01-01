import React, { createContext, useState, useEffect, useContext, SetStateAction } from 'react';

import { Socket, io } from 'socket.io-client'
import api from '../services/api'; 

// import { io } from 'socket.io-client';


export interface Spotted {
  image_url: string;
  content: string; 
  id: string;
  date_created: string;
}

export interface IApplicationContext {
  spotteds: Spotted[]; 
  filteredSpotteds: Spotted[]; 
  setFilteredSpotteds: React.Dispatch<SetStateAction<Spotted[]>>;
  socket: Socket; 
  setSpotteds: React.Dispatch<SetStateAction<Spotted[]>>;

}

const ApplicationContext = createContext({} as IApplicationContext); 

export function useAppContext() {
  const context = useContext(ApplicationContext); 
  return context;
}


const ApplicationContextProvider: React.FC = ({children}) => {
  
  const [spotteds, setSpotteds] = useState<Spotted[]>([]);
  const [showSpotteds, setShowSpotteds] = useState<Spotted[]>([]);
  const [socket, setSocket] = useState({} as Socket); 

  
  useEffect(() => { 

    const socket = io('https://spotted-wednesday.herokuapp.com/'); 


    socket.on('new_spotted', (data) => {
      setSpotteds(current_spotteds => [data, ...current_spotteds])
      setShowSpotteds(current_filtered_spotteds => [data, ...current_filtered_spotteds]); 
    })

    setSocket(socket); 

    fetchSpotteds();

  }, [])

  async function fetchSpotteds() {
    try {
      const response = await api.get<Spotted[]>('/spotteds');

      // console.log(response); 

      setSpotteds(response.data.reverse());
      setShowSpotteds(response.data);

    } catch(err) {
      alert("um erro ocorreu enquanto carregavamos os spotteds");
      console.log(err);
    }
  }


  return (
    <ApplicationContext.Provider value={{
      socket, 
      spotteds, 
      filteredSpotteds: showSpotteds, 
      setFilteredSpotteds: setShowSpotteds, 
      setSpotteds
    }}>
      {children}
    </ApplicationContext.Provider>
  )
} 

export default ApplicationContextProvider