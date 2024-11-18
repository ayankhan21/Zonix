/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,  CreateDateColumn } from 'typeorm';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  chatId: string;

  @Column({ type: 'uuid', nullable: false })
  senderId: string;

  @Column({ type: 'text', nullable: true })
  content: string | null;

  @Column({ type: 'text', nullable: true })
  mediaUrl: string | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'boolean', default: false })
  isRead: boolean;
}
