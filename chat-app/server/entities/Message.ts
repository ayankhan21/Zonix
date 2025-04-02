import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { Chat } from "./Chat";

@Entity()
export class Message {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "boolean", default: false })
  isMedia: boolean;

  @Column({ type: "text", nullable: true })
  mediaUrl: string;

  @ManyToOne(() => User, (user) => user.messages, { onDelete: "CASCADE" })
  sender: User;

  @ManyToOne(() => Chat, (chat) => chat.messages, { onDelete: "CASCADE" })
  chat: Chat;

  @CreateDateColumn()
  createdAt: Date;
}
