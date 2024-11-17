/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // The table name in PostgreSQL
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string | null; // Nullable for guests

  @Column({ type: 'text', nullable: true })
  password: string | null; // Nullable for guests

  @Column({ type: 'varchar', length: 20, default: 'user' })
  role: string; // 'user', 'admin', 'guest'

  @Column({ type: 'text', nullable: true })
  profilePictureUrl: string | null; // URL to profile picture in S3

  @Column({ type: 'text', nullable: true })
  bio: string | null;

  @Column({ type: 'boolean', default: false })
  isGuest: boolean; // True if the user is a guest

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date; // Automatically set to current timestamp
}
