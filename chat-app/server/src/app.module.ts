/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // For reading .env variables
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { ChatGateway } from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Automatically loads .env variables
    TypeOrmModule.forRoot({
      type: 'postgres', // Database type
      host: process.env.DB_HOST, // Database host from .env
      port: +process.env.DB_PORT, // Database port from .env
      username: process.env.DB_USER, // Database username from .env
      password: process.env.DB_PASS, // Database password from .env
      database: process.env.DB_NAME, // Database name from .env
      entities: [
       User
      ], // Add your entities (models)
      synchronize: true, // Set to false in production (avoid overwriting data)
    }),
    AuthModule,
    UsersModule,
    ChatModule,
    MessagesModule,
  ],
  controllers: [AppController], // Add the AppController here
  providers: [AppService, ChatGateway],
})
export class AppModule {}
