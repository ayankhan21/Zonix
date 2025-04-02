import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from "typeorm";
  import { Chat } from "./Chat";
  import { Message } from "./Message";
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ unique: true })
    username: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @Column({ nullable: true })
    profilePicture: string;
  
    @OneToMany(() => Chat, (chat) => chat.creator)
    createdChats: Chat[];
  
    @OneToMany(() => Message, (message) => message.sender)
    messages: Message[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  