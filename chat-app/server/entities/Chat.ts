import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Message } from "./Message";
import { User } from "./User";

@Entity()
export class Chat {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "boolean", default: false })
  isGroup: boolean;

  @ManyToOne(() => User, (user) => user.chats, {
    nullable: true,
    onDelete: "CASCADE",
  })
  createdBy: User;

  @ManyToMany(() => User, (user) => user.chats, { cascade: true })
  @JoinTable()
  participants: User[];

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
