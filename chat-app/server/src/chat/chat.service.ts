import { Injectable } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
  constructor(private readonly chatGateway: ChatGateway) {}

  notifyChatUpdate(chatId: string, message: string) {
    this.chatGateway.server.to(chatId).emit('chatUpdated', { chatId, message });
  }
}
