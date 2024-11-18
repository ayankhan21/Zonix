/* eslint-disable prettier/prettier */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/chat' }) // Namespace for chat
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server; // Socket.IO server instance

  // Handle client connection
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  // Handle client disconnection
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Join a room
  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @MessageBody() data: { roomId: string },
    @ConnectedSocket() client: Socket
  ) {
    const { roomId } = data;
    client.join(roomId); // Add the client to the specified room
    console.log(`Client ${client.id} joined room: ${roomId}`);
    
    // Notify others in the room
    client.to(roomId).emit('userJoined', { userId: client.id });
  }

  // Leave a room
  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(
    @MessageBody() data: { roomId: string },
    @ConnectedSocket() client: Socket
  ) {
    const { roomId } = data;
    client.leave(roomId); // Remove the client from the specified room
    console.log(`Client ${client.id} left room: ${roomId}`);
    
    // Notify others in the room
    client.to(roomId).emit('userLeft', { userId: client.id });
  }

  // Send a message to a specific room
  @SubscribeMessage('sendMessage')
  handleSendMessage(
    @MessageBody() data: { roomId: string; message: string },
    @ConnectedSocket() client: Socket
  ) {
    const { roomId, message } = data;
    console.log(`Message to room ${roomId} from ${client.id}: ${message}`);
    
    // Broadcast the message to everyone in the room (except sender)
    client.to(roomId).emit('newMessage', { senderId: client.id, message });
  }
}
