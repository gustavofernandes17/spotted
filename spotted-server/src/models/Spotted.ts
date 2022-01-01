import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

import { v4 } from 'uuid'; 

@Entity('spotteds') 
export class Spotted {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    length: 280 
  })
  content: string;
  
  @CreateDateColumn()
  date_created: string;

  @Column() 
  image_url: string;

  constructor() {
    this.id = v4();
  }
}